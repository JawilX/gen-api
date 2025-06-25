import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseboolean, ApiResponseZhiXieChangFangDongXinXiXiangQing, ZhiXieChangFangDongXinXiXiangQing } from './_interfaces'

/** 获取制鞋厂房东信息详情 */
export function gratefulDoorAcquireInfo(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseZhiXieChangFangDongXinXiXiangQing['data']> & PromiseLike<UseFetchReturn<ApiResponseZhiXieChangFangDongXinXiXiangQing['data']>> {
  return useGet<ApiResponseZhiXieChangFangDongXinXiXiangQing>(`/api/gratefulDoor/acquireInfo`, data, useFetchOptions)
}

/** 修改制鞋厂房东信息 */
export function gratefulDoorUpdateInfo(data?: ZhiXieChangFangDongXinXiXiangQing, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/gratefulDoor/updateInfo`, data, useFetchOptions)
}
