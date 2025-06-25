import { defineConfig } from '../src'

export default defineConfig({
  apiList: [
    {
      swaggerUrl: '/test/swagger/mess.json',
      outputDir: '/test/api/mess',
      urlPrefix: '',
      enable: true,
      ignore: /\/test\//,
    },
    {
      swaggerUrl: '/test/swagger/swagger1.json',
      outputDir: '/test/api/swagger1',
      urlPrefix: '',
      enable: true,
      ignore: /\/test\//,
    },
    {
      swaggerUrl: '/test/swagger/swagger2.json',
      outputDir: '/test/api/swagger2',
      urlPrefix: '',
      enable: true,
      ignore: /\/test\//,
    },
    {
      swaggerUrl: '/test/swagger/swagger3.json',
      outputDir: '/test/api/swagger3',
      urlPrefix: '',
      enable: false,
      ignore: /\/test\//,
    },
    {
      swaggerUrl: '/test/swagger/swagger4.json',
      outputDir: '/test/api/swagger4',
      urlPrefix: '',
      enable: true,
      ignore: /\/test\//,
    },
    {
      swaggerUrl: '/test/swagger/v2.json',
      outputDir: '/test/api/v2',
      urlPrefix: '',
      enable: true,
      ignore: /\/test\//,
    },
    {
      swaggerUrl: '/test/swagger/v3.json',
      outputDir: '/test/api/v3',
      urlPrefix: '',
      enable: true,
      ignore: /\/test\//,
    },
  ],
  httpTpl: `import type { UseFetchOptions } from '@vueuse/core'`,
  apiBody: ({ url, method, summary, name, formDataStr, outputInterface, pstr1, pstr2 }) => {
    const dataType = outputInterface?.includes('ApiResponseVoid') ? 'unknown' : `${outputInterface}['data']`
    const returnType = `UseFetchReturn<${dataType}> & PromiseLike<UseFetchReturn<${dataType}>>`
    return `
            /** ${summary || '无注释'} */
            export function ${name}(${pstr1}, useFetchOptions?: UseFetchOptions): ${returnType} {
              return use${method}${formDataStr}<${outputInterface}>(\`${url}\`, ${pstr2}, useFetchOptions)
            }`
  },
})
