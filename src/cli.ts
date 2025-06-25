import process from 'node:process'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { version } from '../package.json'
import { resolveConfig } from './config'
import { gen } from './gen'
import { init } from './init'

// eslint-disable-next-line ts/no-unused-expressions
yargs(hideBin(process.argv))
  .scriptName('gen-api')
  .usage('$0 [args]')
  .command('init', 'init api.config.ts', args =>
    args
      .option('force', {
        alias: 'f',
        type: 'boolean',
        default: false,
        describe: '是否覆盖本地的 api.config.ts 文件',
      })
      .help(), async args => init(args))
  .command('now', 'generate api code', args =>
    args.option('config', {
      alias: 'c',
      type: 'string',
      default: '',
      describe: 'api.config.ts 所在文件夹的相对路径',
    })
      .help(), async args => gen(await resolveConfig({ config: args.config })))
  .alias('h', 'help')
  .version('version', version)
  .alias('v', 'version')
  .help()
  .argv
