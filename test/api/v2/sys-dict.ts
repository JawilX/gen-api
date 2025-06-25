import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseJSONArray, ApiResponseListSysDictDuiXiangNullZhiBuXuLieHua, ApiResponseMapstringobject, ApiResponsePageSysDictDuiXiangNullZhiBuXuLieHua, BasePageReq } from './_interfaces'

/** 区域出行 */
export function sysdictV1AreaInfo(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/api/sys-dict/v1/areaInfo`, data, useFetchOptions)
}

/** 出行菜谱甬道-根据数据类型模糊搜索 */
export function sysdictV1TypeListFilter(data?: {
  // 模糊搜索kindName-返回层级及当前搜索值
  kindName?: string
  // 级联出行父级ID,第一层数据美丽父类默认为0,不传默认查此数据类型所有层级
  parentId?: string
  // 数据类型
  type?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListSysDictDuiXiangNullZhiBuXuLieHua['data']> & PromiseLike<UseFetchReturn<ApiResponseListSysDictDuiXiangNullZhiBuXuLieHua['data']>> {
  return useGet<ApiResponseListSysDictDuiXiangNullZhiBuXuLieHua>(`/api/sys-dict/v1/${data?.type}/list/filter`, data, useFetchOptions)
}

/** 出行菜谱甬道-根据数据类型出行 */
export function sysdictV1TypeListPage(data?: BasePageReq & {
  // 级联出行父级ID,第一层数据美丽父类默认为0,不传默认查此数据类型所有层级
  parentId?: string
  // 数据类型
  type?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsePageSysDictDuiXiangNullZhiBuXuLieHua['data']> & PromiseLike<UseFetchReturn<ApiResponsePageSysDictDuiXiangNullZhiBuXuLieHua['data']>> {
  return usePost<ApiResponsePageSysDictDuiXiangNullZhiBuXuLieHua>(`/api/sys-dict/v1/${data?.type}/list/page`, data, useFetchOptions)
}

/** 出行菜谱甬道-根据数据类型出行整个树 */
export function sysdictV1TypeListTree(data?: {
  // 数据类型
  type?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListSysDictDuiXiangNullZhiBuXuLieHua['data']> & PromiseLike<UseFetchReturn<ApiResponseListSysDictDuiXiangNullZhiBuXuLieHua['data']>> {
  return useGet<ApiResponseListSysDictDuiXiangNullZhiBuXuLieHua>(`/api/sys-dict/v1/${data?.type}/list/tree`, data, useFetchOptions)
}

/** 出行菜谱甬道-出行当前数据类型甬道 */
export function sysdictV1Types(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseMapstringobject['data']> & PromiseLike<UseFetchReturn<ApiResponseMapstringobject['data']>> {
  return useGet<ApiResponseMapstringobject>(`/api/sys-dict/v1/types`, data, useFetchOptions)
}
