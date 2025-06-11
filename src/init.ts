import { promises as fs } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { execa } from 'execa'
import c from 'picocolors'
import { CONFIG_FILE_NAME } from './constant'

const cwd = process.cwd()
const configFilePath = path.join(cwd, CONFIG_FILE_NAME)

async function writeConfigFile(filePath = configFilePath) {
  try {
    await fs.writeFile(filePath, `
      import { defineConfig } from '@jawilx/gen-api'

      export default defineConfig({
        apiList: [
          {
            swaggerUrl: '',
            outputDir: '/src/api',
            urlPrefix: '',
            enable: true,
            ignore: /\\/test\\//,
          },
        ],
        httpTpl: \`import type { UseFetchOptions } from '@vueuse/core'\`,
        apiBody: ({ url, method, summary, name, formDataStr, outputInterface, pstr1, pstr2 }) => {
          const dataType = outputInterface?.includes('ApiResponseVoid') ? 'unknown' : \`\${outputInterface}['data']\`
          const returnType = \`UseFetchReturn<\${dataType}> & PromiseLike<UseFetchReturn<\${dataType}>>\`
          return \`
            /** \${summary || '无注释'} */
            export function \${name}(\${pstr1}, useFetchOptions?: UseFetchOptions): \${returnType} {
              return use\${method}\${formDataStr}<\${outputInterface}>(\\\`\${url}\\\`, \${pstr2}, useFetchOptions)
            }\`
        },
      })
    `)
    console.log(c.green('配置文件创建成功'))
    // 格式化
    await execa('eslint', ['--fix', filePath], { stdio: 'inherit' })
  }
  catch (error) {
    console.log(c.red('配置文件创建失败'), error)
  }
}

export async function init(args: { force: boolean }) {
  if (args.force) {
    await writeConfigFile()
  }
  else {
    try {
      await fs.access(configFilePath)
      return console.log(c.yellow('本地已经存在配置文件, 如需覆盖，请执行 gen-api init --force'))
    }
    catch (error) {
      console.error(error)
      await writeConfigFile()
    }
  }
}
