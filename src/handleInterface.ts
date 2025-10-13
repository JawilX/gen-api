import type { ApiInterface, SwaggerData } from './types'
import { handleDescription, handleJsType, handleWeirdName } from './utils'

export function handleInterface(schemas: SwaggerData['components']['schemas'] = {}): ApiInterface[] {
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
  const defs: ApiInterface[] = []
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
function handleProperties(properties: Record<string, ApiInterface>) {
  const arr: ApiInterface[] = []
  Object.keys(properties).forEach((key) => {
    const obj = properties[key]
    const interfaceModal = handleInterfaceModal(obj)
    arr.push({ name: key, ...interfaceModal })
  })
  return arr
}

function handleInterfaceModal(property: ApiInterface) {
  const additionalProperties = property.type === 'object' && property.additionalProperties?.originalRef
  const isArray = property.type === 'array'
  const isSimpleJsType = !additionalProperties && !!handleJsType(property.format || property.type)
  return {
    isArray,
    isSimpleJsType,
    type: additionalProperties ? handleWeirdName(additionalProperties) : handleItemsType(property),
    description: handleDescription(property.description || property.title),
  }
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
function handleItemsType(property: ApiInterface) {
  if (property.type === 'array') {
    if (property?.items?.$ref) {
      const name = handleWeirdName(property.items.$ref.replace('#/components/schemas/', ''))
      return name.startsWith('Error') ? 'any' : name
    }
    else { return handleJsType(property.items?.format || property.items?.type) }
  }
  else if (property?.$ref) {
    const name = handleWeirdName(property.$ref.replace('#/components/schemas/', ''))
    return name.startsWith('Error') ? 'any' : name
  }
  else {
    return handleJsType(property.format || property.type)
  }
}
