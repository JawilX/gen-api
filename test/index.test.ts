import type { InitOptions } from '../src/types'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest'
import { gen } from '../src/gen'
import { handleInlineType, handleInterface } from '../src/handleInterface'

const tmpDir = path.join(process.cwd(), 'test/.tmp-gen')
const outputDir = '/test/.tmp-gen/api'

const schemas = {
  DemoResp: {
    type: 'object',
    properties: {
      // 嵌套数组：外层 [] 由写入器追加，这里必须只展开内层
      matrix: { type: 'array', items: { type: 'array', items: { type: 'string' } } },
      refMatrix: { type: 'array', items: { type: 'array', items: { $ref: '#/components/schemas/DemoItem' } } },
      names: { type: 'array', items: { type: 'string' } },
    },
  },
  DemoItem: {
    type: 'object',
    properties: { id: { type: 'integer', format: 'int32' } },
  },
}

const spec = {
  openapi: '3.0.0',
  info: { title: 'tmp', version: '1.0.0' },
  paths: {
    '/demo/list': {
      get: {
        summary: '列表',
        responses: {
          200: { content: { 'application/json': { schema: { $ref: '#/components/schemas/DemoResp' } } } },
        },
      },
    },
    // 内联对象请求体，其中嵌套了 $ref 和数组
    '/demo/create': {
      post: {
        summary: '创建',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  item: { $ref: '#/components/schemas/DemoItem' },
                  tags: { type: 'array', items: { type: 'string' } },
                },
              },
            },
          },
        },
        responses: {
          200: { content: { 'application/json': { schema: { $ref: '#/components/schemas/DemoResp' } } } },
        },
      },
    },
    // 内联数组请求体，且有同级的 query 参数
    '/demo/search': {
      post: {
        summary: '搜索',
        parameters: [{ name: 'groupCode', in: 'query', required: true, type: 'integer', format: 'int64' }],
        requestBody: {
          content: {
            'application/json': { schema: { type: 'array', items: { type: 'string' } } },
          },
        },
        responses: {
          200: { content: { 'application/json': { schema: { $ref: '#/components/schemas/DemoResp' } } } },
        },
      },
    },
  },
  components: { schemas },
}

async function writeSpec(name: string, content: unknown) {
  await fs.mkdir(tmpDir, { recursive: true })
  await fs.writeFile(path.join(tmpDir, name), JSON.stringify(content))
}

function createConfig(overrides: Partial<InitOptions> = {}): InitOptions {
  return {
    apiList: [{ swaggerUrl: './test/.tmp-gen/spec.json', outputDir, enable: true }],
    apiBody: ({ name, pstr1, pstr2 }) => `export function ${name}(${pstr1}) { return [${pstr2}] }`,
    // 测试内不做 eslint 格式化，避免依赖外部命令
    formatWithEslint: false,
    ...overrides,
  }
}

afterEach(() => {
  vi.restoreAllMocks()
})

afterAll(async () => {
  await fs.rm(tmpDir, { recursive: true, force: true })
})

describe('handleInterface', () => {
  it('递归展开嵌套数组，不输出 array 关键字', () => {
    const demo = handleInterface(schemas as any).find(item => item.name === 'DemoResp')
    const getType = (name: string) => demo?.properties.find(property => property.name === name)?.type

    expect(getType('matrix')).toBe('string[]')
    expect(getType('refMatrix')).toBe('DemoItem[]')
    expect(getType('names')).toBe('string')
  })
})

describe('handleInlineType', () => {
  it('展开内联数组，简单类型不产生 import', () => {
    const refs: string[] = []
    expect(handleInlineType({ type: 'array', items: { type: 'string' } }, refs)).toBe('string[]')
    expect(handleInlineType({ type: 'array', items: { type: 'array', items: { type: 'integer', format: 'int64' } } }, refs)).toBe('(number | string)[][]')
    expect(refs).toEqual([])
  })

  it('$ref 元素既展开成数组类型，也被收集为待引入类型', () => {
    const refs: string[] = []
    expect(handleInlineType({ type: 'array', items: { $ref: '#/components/schemas/DemoItem' } }, refs)).toBe('DemoItem[]')
    expect(refs).toEqual(['DemoItem'])
  })

  it('对象体逐属性展开，嵌套 $ref 被收集', () => {
    const refs: string[] = []
    const type = handleInlineType({
      type: 'object',
      properties: {
        name: { type: 'string' },
        item: { $ref: '#/components/schemas/DemoItem' },
        tags: { type: 'array', items: { type: 'string' } },
      },
    } as any, refs)

    expect(type).toBe('{\n  name?: string;\n  item?: DemoItem;\n  tags?: string[];\n}')
    expect(refs).toEqual(['DemoItem'])
  })

  it('schema 缺失时退化成 any', () => {
    expect(handleInlineType(undefined)).toBe('any')
    expect(handleInlineType({ type: 'object' } as any)).toBe('any')
  })
})

describe('gen', () => {
  it('resolve 时全部文件已写入，且 DTO 中的嵌套数组合法', async () => {
    await writeSpec('spec.json', spec)

    await gen(createConfig())

    // gen resolve 后立即读取，能读到内容即证明写入已被等待
    const dto = await fs.readFile(path.join(tmpDir, 'api/_interfaces.ts'), 'utf-8')
    expect(dto).toContain('matrix?: string[][]')
    expect(dto).toContain('refMatrix?: DemoItem[][]')
    expect(dto).toContain('names?: string[]')
    expect(dto).not.toContain('array[]')

    const written = await fs.readdir(path.join(tmpDir, 'api'))
    expect(written).toContain('_interfaces.ts')
    expect(written.length).toBeGreaterThan(1)
  })

  it('内联请求体展开成入参类型，嵌套的命名类型会被引入', async () => {
    await writeSpec('spec.json', spec)

    await gen(createConfig())

    const controller = await fs.readFile(path.join(tmpDir, 'api/demo.ts'), 'utf-8')
    // 内联对象体展开成内联类型，$ref 属性保持命名类型
    expect(controller).toContain('name?: string;')
    expect(controller).toContain('item?: DemoItem;')
    expect(controller).toContain('tags?: string[];')
    // 内联数组体与同级 query 参数交叉，body 类型不再被丢弃
    expect(controller).toContain('data?: string[] & {')
    // 内联体里用到的命名类型必须出现在 import 中，否则生成的文件无法编译
    const importLine = controller.split('\n').find(line => line.includes('./_interfaces'))
    expect(importLine).toContain('DemoItem')
  })

  it('返回值报告控制器、DTO 与接口名', async () => {
    await writeSpec('spec.json', spec)

    const { entries } = await gen(createConfig())

    expect(entries).toHaveLength(1)
    expect(entries[0]?.swaggerUrl).toBe('./test/.tmp-gen/spec.json')
    expect(entries[0]?.outputDir).toBe(path.join(tmpDir, 'api'))
    expect(entries[0]?.controllers).toEqual([
      { file: path.join(tmpDir, 'api/demo.ts'), names: ['demoCreate', 'demoList', 'demoSearch'] },
    ])
    expect(entries[0]?.dtoFile).toBe(path.join(tmpDir, 'api/_interfaces.ts'))
    expect([...(entries[0]?.dtoNames ?? [])].sort()).toEqual(['DemoItem', 'DemoResp'])
  })

  it('同一控制器内接口名重复时 reject，且不创建输出目录', async () => {
    await writeSpec('dup-names.json', {
      openapi: '3.0.0',
      info: { title: 'tmp', version: '1.0.0' },
      paths: {
        '/demo/user-list': { get: { responses: { 200: { content: { 'application/json': { schema: { type: 'string' } } } } } } },
        '/demo/user_list': { get: { responses: { 200: { content: { 'application/json': { schema: { type: 'string' } } } } } } },
      },
    })
    const name = 'api-dup'
    const config = createConfig({ apiList: [{ swaggerUrl: './test/.tmp-gen/dup-names.json', outputDir: `/test/.tmp-gen/${name}`, enable: true }] })

    const error = await gen(config).then(() => null, (e: Error) => e)
    expect(error?.message).toContain('demo.ts 内接口名重复')
    // 报错要能定位到冲突的两个接口
    expect(error?.message).toContain('GET /demo/user-list')
    expect(error?.message).toContain('GET /demo/user_list')
    // 校验发生在创建目录之前，不会留下任何产物
    await expect(fs.access(path.join(tmpDir, name))).rejects.toThrow()
  })

  it('出参 $ref 指向不存在的模型时 reject，且不写出控制器', async () => {
    await writeSpec('missing-dto.json', {
      openapi: '3.0.0',
      info: { title: 'tmp', version: '1.0.0' },
      paths: {
        '/demo/detail': { get: { responses: { 200: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Nope' } } } } } } },
      },
    })
    const name = 'api-missing-dto'
    const config = createConfig({ apiList: [{ swaggerUrl: './test/.tmp-gen/missing-dto.json', outputDir: `/test/.tmp-gen/${name}`, enable: true }] })

    const error = await gen(config).then(() => null, (e: Error) => e)
    expect(error?.message).toContain('_interfaces.ts 里不存在以下类型')
    expect(error?.message).toContain('Nope')
    // 目录已建但控制器一个都没写
    await expect(fs.readdir(path.join(tmpDir, name))).resolves.toEqual([])
  })

  it('apiBody 返回空白内容时 reject', async () => {
    await writeSpec('spec.json', spec)
    const name = 'api-blank-template'
    const config = createConfig({
      apiList: [{ swaggerUrl: './test/.tmp-gen/spec.json', outputDir: `/test/.tmp-gen/${name}`, enable: true }],
      apiBody: () => '  \n',
    })

    await expect(gen(config)).rejects.toThrow('apiBody缺少返回值')
    await expect(fs.readdir(path.join(tmpDir, name))).resolves.toEqual([])
  })

  it('swagger 文件不存在时 reject', async () => {
    const config = createConfig({ apiList: [{ swaggerUrl: './test/.tmp-gen/missing.json', outputDir, enable: true }] })

    await expect(gen(config)).rejects.toThrow('swagger地址访问异常')
  })

  it('文档缺少 paths 时 reject，不写出空文件', async () => {
    await writeSpec('no-paths.json', { openapi: '3.0.0', info: { title: 'tmp', version: '1.0.0' } })
    const config = createConfig({ apiList: [{ swaggerUrl: './test/.tmp-gen/no-paths.json', outputDir, enable: true }] })

    await expect(gen(config)).rejects.toThrow('swagger 文档缺少可用的 paths')
  })

  it('eslint 不可用时只提示一次，不中断生成', async () => {
    await writeSpec('spec.json', spec)
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const originalPath = process.env.PATH
    // 指向不含 eslint 的目录，模拟未安装 eslint 的用户环境
    process.env.PATH = tmpDir
    try {
      await gen(createConfig({ formatWithEslint: true }))
    }
    finally {
      process.env.PATH = originalPath
    }

    expect(warn).toHaveBeenCalledTimes(1)
    await expect(fs.access(path.join(tmpDir, 'api/_interfaces.ts'))).resolves.toBeUndefined()
  })
})
