import type { ApiInterface, SwaggerData } from './types'
import { handleDescription, handleJsType, handleWeirdName } from './utils'

/** Schema 的属性是映射结构，转换后的 DTO 属性按原顺序保存为列表。 */
export interface GeneratedInterface extends Omit<ApiInterface, 'properties'> {
  properties: ApiInterface[]
}

export function handleInterface(schemas: SwaggerData['components']['schemas'] = {}): GeneratedInterface[] {
  /**
   * [{
   *    name:"",   // 原始 key 处理后结果，如： ApiResponse
   *    type:"",   // 类型，如 "object", 目前看到的都是 'object'
   *    properties:[{
   *      name:"",
   *      isArray:false,  // 是否是数组
   *      isSimpleJsType:false, // 是否是简单 js 类型, 如 number、string 等
   *      type:"",        // 类型，如 string, number, boolean , UserInterface
   *      description:""  // 注释
   *    }]
   *  }]
   */
  const defs: GeneratedInterface[] = []
  Object.keys(schemas).forEach((key) => {
    const interfaceName = handleWeirdName(key)
    // 不存在或者是简单类型
    if (!interfaceName || handleJsType(interfaceName))
      return []

    const obj = schemas[key]
    const properties = handleProperties(obj.properties || {})
    const interfaceModal = handleInterfaceModal(obj)
    defs.push({ name: interfaceName, ...interfaceModal, properties })
  })
  return defs
}

/**
 * 处理属性
 * @param properties 格式如下
 * "properties": {
 *   "directEntryGroup": { "type": "boolean", "description": "是否直接入圈子" },
 *   "groupId": { "type": "integer", "format": "int64", "description": "圈子id" }
 * },
 */
function handleProperties(properties: Record<string, ApiInterface>, refs?: string[]) {
  const arr: ApiInterface[] = []
  Object.keys(properties).forEach((key) => {
    const obj = properties[key]
    const interfaceModal = handleInterfaceModal(obj, refs)
    arr.push({ name: key, ...interfaceModal })
  })
  return arr
}

function handleInterfaceModal(property: ApiInterface, refs?: string[]) {
  const additionalProperties = property.type === 'object' && property.additionalProperties?.originalRef
  const isArray = property.type === 'array'
  const isSimpleJsType = !additionalProperties && !!handleJsType(property.format || property.type)
  const type = additionalProperties ? handleWeirdName(additionalProperties) : handleItemsType(property, refs)
  // map 的值类型也是命名类型，内联渲染时需要引入
  if (additionalProperties)
    refs?.push(type)
  return {
    isArray,
    isSimpleJsType,
    type,
    description: handleDescription(property.description || property.title),
  }
}

/**
 * 把内联 schema 渲染成 TS 类型文本，refs 收集其中用到的命名类型，供调用方补充 import
 * 复用 DTO 的属性归一化逻辑，保证内联请求体与 _interfaces 里的类型口径一致
 */
export function handleInlineType(schema: ApiInterface | undefined, refs: string[] = []): string {
  if (!schema)
    return 'any'

  const modal = handleInterfaceModal(schema, refs)
  // 对象体展开成内联对象类型，逐属性复用 DTO 的归一化结果
  if (!modal.isArray && schema.type === 'object' && schema.properties) {
    const properties = handleProperties(schema.properties, refs)
      .map(property => `  ${property.name}?: ${property.type}${property.isArray ? '[]' : ''};`)
    return `{\n${properties.join('\n')}\n}`
  }

  return `${modal.type}${modal.isArray ? '[]' : ''}`
}

/**
 * 处理以下数据格式
 * "certificateList": {
      "type": "array",
      "description": "执业资格证",
      "items": {
        "$ref": "#/definitions/CrmCustomerPersonCertificateInfoResp",
        "originalRef": "CrmCustomerPersonCertificateInfoResp"
      }
    }
  或者
  "fileIdList": {
      "type": "array",
      "description": "图片文件id列表",
      "items": { "type": "integer", "format": "int64" }
    },
  或者
  "data": {
    "$ref": "#/definitions/AddUserReq", "originalRef": "AddUserReq"
  },
 */
function handleItemsType(property: ApiInterface, refs?: string[]): string {
  if (property.type === 'array') {
    // 当前层的 [] 由写入器追加，这里只递归展开 items 自身的数组层级，避免输出 OpenAPI 的 array 关键字
    if (property.items?.type === 'array') {
      return `${handleItemsType(property.items, refs)}[]`
    }
    else if (property?.items?.$ref) {
      return handleRefType(property.items.$ref, refs)
    }
    else {
      return handleJsType(property.items?.format || property.items?.type) || property.items?.type || 'any'
    }
  }
  else if (property?.$ref) {
    return handleRefType(property.$ref, refs)
  }
  else {
    return handleJsType(property.format || property.type) || property.type || 'any'
  }
}

/** $ref 转成类型名；Error 开头的模型文档里通常不存在，统一按 any 处理 */
function handleRefType(ref: string, refs?: string[]) {
  const name = handleWeirdName(ref.replace('#/components/schemas/', ''))
  if (name.startsWith('Error'))
    return 'any'

  refs?.push(name)
  return name
}
