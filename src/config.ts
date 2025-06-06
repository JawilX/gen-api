import type { InitOptions } from './types'
import process from 'node:process'
import { createConfigLoader } from 'unconfig'

export async function resolveConfig(): Promise<InitOptions> {
  const loader = createConfigLoader({
    sources: [
      {
        files: [
          'api.config',
        ],
      },
      {
        files: [
          '.apirc',
        ],
        extensions: ['json', ''],
      },
    ],
    cwd: process.cwd(),
    merge: false,
  })

  const config = await loader.load()

  return config.config as InitOptions
}
