import type { InitOptions } from './types'

export * from './gen'
export * from './init'
export * from './types'

export function defineConfig(options: Partial<InitOptions>) {
  return options
}
