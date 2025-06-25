import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseComPageWaiBuShuiDaoXiangYing, ApiResponseComPageWaiBuZhiXieChangChuCan, ApiResponseListGreenBookGratefulInfoResp, WaiBuShuiDaoSouSuoRuCan, WaiBuZhiXieChangSouSuoRuCan } from './_interfaces'

/** 获取旅客甬道 */
export function greenBookListGratefulInfo(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListGreenBookGratefulInfoResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListGreenBookGratefulInfoResp['data']>> {
  return useGet<ApiResponseListGreenBookGratefulInfoResp>(`/api/greenBook/listGratefulInfo`, data, useFetchOptions)
}

/** 外部制鞋厂下内部水稻甬道 */
export function greenBookOuterOuterDesktopList(data?: WaiBuShuiDaoSouSuoRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageWaiBuShuiDaoXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageWaiBuShuiDaoXiangYing['data']>> {
  return usePost<ApiResponseComPageWaiBuShuiDaoXiangYing>(`/api/greenBook/outer/outerDesktopList`, data, useFetchOptions)
}

/** 外部制鞋厂甬道 */
export function greenBookOuterOuterDoorList(data?: WaiBuZhiXieChangSouSuoRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageWaiBuZhiXieChangChuCan['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageWaiBuZhiXieChangChuCan['data']>> {
  return usePost<ApiResponseComPageWaiBuZhiXieChangChuCan>(`/api/greenBook/outer/outerDoorList`, data, useFetchOptions)
}
