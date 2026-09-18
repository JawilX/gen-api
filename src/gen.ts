import type { GeneratedInterface } from './handleInterface'
import type { ApiBlock, ApiBodyParams, ApiOptions, ApiParameter, InitOptions, SwaggerData } from './types'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { capitalize } from '@antfu/utils'
import axios from 'axios'
import { execa } from 'execa'
import c from 'picocolors'
import converter from 'swagger2openapi'
import { handleApiModel } from './handleApiModel'
import { handleInterface } from './handleInterface'
import { commonUrl, handleDescription, handleJsType, mixedTypeCompare } from './utils'

const CWD = process.cwd()

export async function gen(config: InitOptions) {
  if (!config)
    throw new Error('请先执行 gen-api init 初始化配置文件')

  const apiList = config.apiList.filter(item => item.enable)

  if (!config.apiBody)
    throw new Error('配置文件里的 apiBody不能为空, 且必须是一个函数')

  for (const item of apiList) {
    const swaggerUrl = item.swaggerUrl
    const absOutputDir = path.join(CWD, item.outputDir || '/src/api')
    const apiOptions = {
      apiNameForceAppendMethod: config.apiNameForceAppendMethod,
      ...item,
      absOutputDir,
    }

    if (!swaggerUrl)
      throw new Error('配置文件里的 swaggerUrl 不能为空')

    let data
    try {
      if (swaggerUrl.startsWith('http')) {
        const res = await axios.get(swaggerUrl)
        data = res.data
      }
      else {
        const filePath = path.join(CWD, swaggerUrl)
        data = JSON.parse(await fs.readFile(filePath, 'utf-8'))
      }
    }
    catch (error) {
      throw new Error('swagger地址访问异常', { cause: error })
    }

    const normalized = await normalizeData(data, config, item.swaggerVersion)
    await parseData(apiOptions, normalized, config)
  }
}

async function normalizeData(data: any, initOptions: InitOptions, swaggerVersion?: 2 | 3) {
  if (!data)
    throw new Error('swagger 文档内容为空')

  const version = swaggerVersion || (data.swagger?.startsWith('2') ? 2 : 3)

  try {
    if (version === 2) {
      if (initOptions.useLocalConvert) {
        const res: any = await new Promise((resolve, reject) => {
          converter.convertObj(data, { patch: true }, (err: any, result: any) => {
            if (err)
              reject(err)
            else resolve(result)
          })
        })
        data = res.openapi
      }
      else {
        const res = await axios.post(initOptions.swaggerConvertApi ?? 'https://converter.swagger.io/api/convert', data)
        data = res.data
      }
    }
  }
  catch (error) {
    throw new Error('convert swagger 2 to openapi 3 异常', { cause: error })
  }

  return data
}

async function parseData(apiOptions: ApiOptions, data: SwaggerData, initOptions: InitOptions) {
  if (!data.paths || typeof data.paths !== 'object')
    throw new Error('swagger 文档缺少可用的 paths')

  const apiList = handleApiModel(apiOptions, data.paths)
  assertUniqueApiNames(apiList)
  const interfaces = handleInterface(data.components?.schemas)
  const dtoNames = new Set(interfaces.flatMap(item => (item.name ? [item.name] : [])))
  const count = apiList.reduce((pre, cur) => {
    return pre + cur.apis.length
  }, 0)
  console.log(c.green(`总共 ${count} 个接口生成中...`))
  // 目录在此一次性创建，写入阶段不再探测目录是否存在
  await fs.mkdir(apiOptions.absOutputDir || './', { recursive: true })
  // 全部文件写入完成后才返回，调用方据此判断生成是否结束
  const apiFiles = await writeApiToFile(apiOptions, apiList, initOptions, dtoNames)
  const interfaceFile = await writeInterfaceToFile(apiOptions, interfaces)
  await formatFiles([...apiFiles, interfaceFile], initOptions)
}

/** 同一控制器文件内的接口名必须唯一，重名会产出无法编译的重复实现 */
function assertUniqueApiNames(apiList: ApiBlock[]) {
  apiList.forEach((block) => {
    const byName = new Map<string, ApiBodyParams[]>()
    block.apis.forEach((api) => {
      const namesakes = byName.get(api.name) ?? []
      namesakes.push(api)
      byName.set(api.name, namesakes)
    })
    const conflicts = [...byName].filter(([, namesakes]) => namesakes.length > 1)
    if (!conflicts.length)
      return

    const detail = conflicts
      .map(([name, namesakes]) => `${name}（${namesakes.map(api => `${api.method.toUpperCase()} ${api.url}`).join('、')}）`)
      .join('；')
    throw new Error(`${block.namespace}.ts 内接口名重复：${detail}；请用 ignore 或 only 排除冲突接口`)
  })
}

async function writeApiToFile(apiOptions: ApiOptions, apiList: ApiBlock[], initOptions: InitOptions, dtoNames: Set<string>) {
  const outputDir = apiOptions.absOutputDir || './'
  const controllers = apiList.map((item) => {
    const tplStr = `${initOptions.httpTpl || ''}`
    let apiStr = ''
    const namespace = item.namespace
    let fileUsedInterface: string[] = [] // 当前文件用到的 interface
    const itemApis = item.apis.sort((a, b) => mixedTypeCompare(a.name, b.name))
    itemApis.forEach((api) => {
      const { name, url, method, summary, parameters, requestBodyRef, requestBodyInline, requestFormData, formDataParameters, outputInterface } = api
      // 出参存在且不是简单类型
      if (outputInterface && !handleJsType(outputInterface))
        fileUsedInterface.push(outputInterface)

      // 入参需要引入的interface
      parameters?.forEach(item => !item.isSimpleJsType && item.type && fileUsedInterface.push(item.type))

      let { p1, p2 } = getParamStr(parameters)
      // $ref 请求体引入命名类型，内联请求体已在解析阶段展开成 TS 类型
      if (requestBodyRef)
        fileUsedInterface.push(requestBodyRef)
      requestBodyInline?.imports.forEach(item => fileUsedInterface.push(item))
      const requestBodyType = requestBodyRef || requestBodyInline?.type
      if (requestBodyType) {
        // 既有请求体，也有在 parameters 中，则需要处理；any 与对象交叉会退化成 any，直接用 any
        let p1ObjStr = requestBodyType === 'any' ? '' : p1.replace('data?: ', '')
        p1ObjStr = p1ObjStr && p1ObjStr !== 'any' ? ` & ${p1ObjStr}` : ''
        p1 = `data?: ${requestBodyType}${p1ObjStr}`
        p2 = 'data'
      }
      if (requestFormData) {
        const { schema } = requestFormData
        if (schema?.type === 'object' && formDataParameters) {
          p1 = `data?: {${formDataParameters.map(item => `${item.name}?: ${item.type}${item.isArray ? '[]' : ''}`).join(', ')}}`
          p2 = 'data'
        }
        else {
          p1 = `data?: ${handleJsType(schema?.format || schema?.type || 'binary')}`
          p2 = 'data'
        }
      }

      const apiBodyFn = initOptions.apiBody
      const apiBodyStr = apiBodyFn({
        name,
        url: (apiOptions.urlPrefix || '') + commonUrl(url),
        method: capitalize(method),
        summary,
        parameters,
        requestFormData,
        formDataParameters,
        formDataStr: requestFormData ? 'FormData' : '',
        outputInterface: outputInterface || 'any', // 出参不存在，处理成any
        pstr1: p1,
        pstr2: p2,
      })
      if (!apiBodyStr?.trim())
        throw new Error('apiBody缺少返回值！')

      apiStr += `${apiBodyStr}\n`
    })

    // interface 引入
    let importStr = ''
    fileUsedInterface = [...new Set(fileUsedInterface)].sort((a, b) => mixedTypeCompare(a, b))
    if (fileUsedInterface.length) {
      importStr += `import type {`
      fileUsedInterface.forEach((item, index) => {
        importStr += index === 0 ? `${item}` : `,${item}`
      })
      importStr += `} from './_interfaces'`
    }

    return {
      namespace,
      targetFile: path.join(outputDir, `${namespace}.ts`),
      content: `${tplStr}\n${importStr}\n${apiStr}`,
      imports: fileUsedInterface,
    }
  })

  // 全部渲染完成后再校验，避免把悬空 import 写进目标目录
  assertDtoImports(controllers, dtoNames)

  const writtenFiles: string[] = []
  for (const controller of controllers) {
    try {
      await fs.writeFile(controller.targetFile, controller.content)
    }
    catch (error) {
      throw new Error(`写入 ${controller.namespace}.ts 失败`, { cause: error })
    }
    writtenFiles.push(controller.targetFile)
  }
  return writtenFiles
}

/** 控制器 import 的 DTO 名必须在本轮生成的 _interfaces.ts 中，否则会产出悬空 import */
function assertDtoImports(controllers: { namespace: string, imports: string[] }[], dtoNames: Set<string>) {
  const missing = new Map<string, string[]>()
  controllers.forEach((controller) => {
    controller.imports.forEach((name) => {
      if (dtoNames.has(name))
        return

      const namespaces = missing.get(name) ?? []
      namespaces.push(controller.namespace)
      missing.set(name, namespaces)
    })
  })
  if (!missing.size)
    return

  const detail = [...missing].map(([name, namespaces]) => `${name}（${namespaces.join('、')}）`).join('；')
  throw new Error(`_interfaces.ts 里不存在以下类型：${detail}；通常是文档中的 $ref 指向了未定义的模型`)
}

/** eslint 缺失或格式化报错时不阻断生成，提示一次后跳过剩余文件 */
async function formatFiles(targetFiles: string[], initOptions: InitOptions) {
  if (initOptions.formatWithEslint === false)
    return
  for (const targetFile of targetFiles) {
    try {
      await execa('eslint', ['--fix', targetFile], { stdio: 'inherit' })
    }
    catch (error) {
      const reason = error instanceof Error ? error.message.split('\n')[0] : String(error)
      console.warn(c.yellow(`eslint 格式化失败，已跳过剩余文件：${reason}`))
      return
    }
  }
}

async function writeInterfaceToFile(apiOptions: ApiOptions, interfaces: GeneratedInterface[]) {
  const absOutputDir = apiOptions.absOutputDir || ''
  let str = ''
  const interfacesSorted = interfaces.sort((a, b) => mixedTypeCompare(a?.name, b?.name))
  interfacesSorted.forEach((item) => {
    str += `export interface ${item.name} {\n\n`
    // properties 已是按 schema 顺序展开的列表，直接遍历即可
    item.properties.forEach((it) => {
      // 注释
      str += it.description ? `/** ${handleDescription(it.description)} */\n` : ''
      str += `${it.name}?: ${it.type}${it.isArray ? '[]' : ''}\n`
    })
    str += '\n}\n\n'
  })
  const targetFile = path.join(absOutputDir, `_interfaces.ts`)
  try {
    await fs.writeFile(targetFile, str)
  }
  catch (error) {
    throw new Error('写入 _interfaces.ts 失败', { cause: error })
  }
  return targetFile
}

/**
 *
 * @param {*} parameters 数据格式如下
 * [{
 *  name: 'name',
 *  in: 'query',
 *  isArray: false,  // 是否是数组
 *  isSimpleJsType:false,  // 是否是简单js类型
 *  type: 'string',
 *  description: 'name',
 * }]
 */
function getParamStr(parameters?: ApiParameter[]) {
  // 过滤掉 in header 的参数
  const avaliableParam = (parameters || []).filter(item => item.in !== 'header')
  // 无参数
  if (!avaliableParam.length)
    return { p1: 'data?: any', p2: 'data' }

  let p1 = ''
  let p2 = ''
  // 只有一个参数，且 in body
  if (avaliableParam.length === 1 && avaliableParam[0].in === 'body') {
    const onlyParam = avaliableParam[0]
    p1 = `data?: ${onlyParam.type}${onlyParam.isArray ? '[]' : ''}`
    p2 = 'data'
  }
  // 所有的参数都 in path
  else if (avaliableParam.every(p => p.in === 'path')) {
    const str = avaliableParam.reduce((pre, cur) => {
      let desc = handleDescription(cur.description)
      desc = desc && desc !== cur.name.trim() ? `\n  // ${desc}\n` : '\n' // 有注释且和名字不一样
      return `${pre}${desc}${cur.name}?:${cur.type}${cur.isArray ? '[]' : ''};`
    }, '')
    p1 = `data?: {${str}\n}`
    p2 = 'data'
  }
  // 所有的参数都 in query 或 in body
  else if (avaliableParam.every(p => p.in === 'query' || p.in === 'body')) {
    const str = avaliableParam.reduce((pre, cur) => {
      let desc = handleDescription(cur.description)
      desc = desc && desc !== cur.name.trim() ? `\n  // ${desc}\n` : '\n' // 有注释且和名字不一样
      return `${pre}${desc}${cur.name}?: ${cur.type}${cur.isArray ? '[]' : ''};`
    }, '')
    p1 = `data?: {${str}\n}`
    p2 = 'data'
  }
  // 存在 in path 的参数，且其它都 in query 或 in body
  else if (
    avaliableParam.some(p => p.in === 'path')
    && avaliableParam.filter(p => p.in !== 'path').every(p => p.in === 'query' || p.in === 'body')
  ) {
    const str = avaliableParam.reduce((pre, cur) => {
      let desc = handleDescription(cur.description)
      desc = desc && desc !== cur.name.trim() ? `\n  // ${desc}\n` : '\n' // 有注释且和名字不一样
      return `${pre}${desc}${cur.name}?: ${cur.type}${cur.isArray ? '[]' : ''};`
    }, '')
    p1 = `data?: {${str}\n}`
    p2 = `data`
  }
  // 其他奇怪的或未知的情况，如 in formData
  else {
    p1 = 'data?: any'
    p2 = 'data'
  }
  return {
    p1,
    p2,
  }
}
