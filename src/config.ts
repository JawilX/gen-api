import type { InitOptions } from './types'
import process from 'node:process'
import { createConfigLoader } from 'unconfig'

export async function resolveConfig(options: {
  /** 用户传入的 config 配置文件路径 */
  config: string
}): Promise<InitOptions> {
  const loader = createConfigLoader({
    sources: [
      { files: ['api.config'] },
      { files: ['.apirc'], extensions: ['json', ''] },
    ],
    cwd: options.config || process.cwd(),
    merge: false,
  })

  const config = await loader.load()

  return config.config as InitOptions
}
