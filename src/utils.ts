import type { ApiContent } from './types'
import { capitalize } from '@antfu/utils'
import { pinyin } from 'pinyin-pro'
import { camelCase } from 'scule'

const jsKeyWords = [
  'delete',
  'break',
  'catch',
  'continue',
  'instanceof',
  'new',
  'switch',
  'throw',
  'while',
  'with',
  'finally',
  'return',
  'export',
  'enum',
  'private',
  'package',
  'public',
  'static',
  'for',
  'function',
]

/**
 * 处理接口地址
 * "/abc/def/{taskId}"   => `/abc/def/${data?.taskId}`
 * "/api/abc-defg/v1/{type}/list/filter"  => `/api/abc-defg/v1/${data?.type}/list/filter`
 */
export function commonUrl(url: string): string {
  return url.replace(/\{/g, '${data?.')
}

/**
 * 将接口地址转化为接口名称
 */
export function getApiName(url: string, method: string) {
  url = url.replace(/^\/api/, '') // 去除开头的 /api
  // 去除可能存在的${}
  url = url.replace(/[${}]/g, '')
  let name = camelCase(url)
  // 路径相同的 api, 在后面拼上请求方法以做区分， 如，有两个接口处理后的接口名称都是 systemUser，则分别处理成： systemUserGet 和  systemUserPost
  if (method)
    name += capitalize(method)
  // 如果处理后的接口名称正好是 js 关键字，则默认加上Fn, 如，delete 处理成 deleteFn
  return jsKeyWords.includes(name) ? `${name}Fn` : name
}

/**
 * 获取接口所属文件名称
 * 将 /api/user/create 转化为 user
 */
export function getNamespace(url: string) {
  const arr = url.split('/')
  let name = arr.find(item => item && item !== 'api') || 'root'
  name = camelCase(name)
  return name
}

/**
 * 获取 requestBody 或 responses 里的 $ref 的实际接口对象
 */
export function getContentOriginRef(content: ApiContent) {
  if (!content)
    return ''

  const keys = Object.keys(content)
  return handleWeirdName(content[keys[0]].schema.$ref?.replace('#/components/schemas/', ''))
}

/**
 * 处理一些奇奇怪怪的 interface 或 入参 name，去除特殊字符，并将中文转英文
 * 如： ApiResponse«List«我的数据对象GroupResp»»， 将被处理成 ApiResponseWoDeShuJuDuiXiangGroupResp
 */
export function handleWeirdName(originKey: string) {
  if (!originKey || !originKey.trim())
    return ''
  let str = originKey.replace(/[[\]()«»《》{}（）【】]/g, '') // 去除各种括号
  str = str.replace(/[\s\-&/*=+$]/g, '') // 去除所有空格，短杠 - ，斜杠 /， 星号 *， 等号 =，加号 +, $符
  str = str.replace(/([,，、；：:;.。"'‘’“”])/g, '') // 去除中英文逗号，顿号，冒号，分号，中英文句号，中引文单双引号
  // 汉字转拼音 历史消息=>LiShiXiaoXi
  if (hasChinese(str))
    str = pinyin(str, { nonZh: 'consecutive', toneType: 'none', v: true, type: 'array' }).map(upperCaseFirstLetter).join('')
  return str
}

/** 处理注释 */
export function handleDescription(desc?: string) {
  if (!desc)
    return ''
  return desc
    .trim() // 去除首尾空格
    .replace(/[\n\t]/g, ' ') // 去除换行符和制表符
    .replace(/\s+/g, ' ') // 多个空格合并成一个空格
    .replace(/(\/\*+)|(\*+\/)/g, '') // 去除 /* 和 */
}

export function hasChinese(str: string) {
  return /[\u4E00-\u9FA5]+/.test(str)
}

export function handleJsType(originType: string) {
  const typeEnum = {
    'integer': 'number',
    'float': 'number',
    'string': 'string',
    'long': '(number | string)',
    'byte': 'string',
    'boolean': 'boolean',
    'Boolean': 'boolean',
    'number': 'number',
    // array: '[]',
    'Object': 'any',
    'object': 'any',
    'double': '(number | string)',
    'Int64': '(number | string)',
    'int64': '(number | string)',
    'Int32': 'number',
    'int32': 'number',
    'String': 'string',
    'date-time': 'string',
    'Date': 'string',
    'date': 'string',
    'file': 'Blob',
    'binary': 'Blob',
    // "properties": {
    //   "uri": { "type": "string", "format": "uri" },
    //   "url": { "type": "string", "format": "url" },
    // },
    'uri': 'string',
    'url': 'string',
    'uuid': 'string',
    'any': 'any',
  } as any
  return typeEnum[originType] || ''
}

/** 首字母大写 */
export function upperCaseFirstLetter(str: string) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

/** 首字母小写 */
export function lowerCaseFirstLetter(str: string) {
  return str.slice(0, 1).toLowerCase() + str.slice(1)
}

/** 处理混合类型（字符串和数字）的排序问题 */
export function mixedTypeCompare(a?: string | number, b?: string | number) {
  // 如果都是数字，直接比较
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b
  }
  // 如果都是字符串，使用自然排序
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b, undefined, { numeric: true })
  }
  // 数字排在字符串前面
  return typeof a === 'number' ? -1 : 1
}
