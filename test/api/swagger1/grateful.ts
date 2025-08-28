import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseboolean, ApiResponseFangDongXinXi, ApiResponseListFangDongXinXi, QuDaoZhiXieChangJieMengQingQiuRuCan } from './_interfaces'

/** 出行当前喇叭花美丽房东甬道 */
export function gratefulAcquireGratefulList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListFangDongXinXi['data']> & PromiseLike<UseFetchReturn<ApiResponseListFangDongXinXi['data']>> {
  return useGet<ApiResponseListFangDongXinXi>(`/api/grateful/acquireGratefulList`, data, useFetchOptions)
}

/** 获取当前美丽房东信息 */
export function gratefulAcquirePresentGratefulInfo(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseFangDongXinXi['data']> & PromiseLike<UseFetchReturn<ApiResponseFangDongXinXi['data']>> {
  return useGet<ApiResponseFangDongXinXi>(`/api/grateful/acquirePresentGratefulInfo`, data, useFetchOptions)
}

/** 渠道制鞋厂解绑房东 */
export function gratefulChannelUnbind(data?: QuDaoZhiXieChangJieMengQingQiuRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/grateful/channel/unbind`, data, useFetchOptions)
}

/** 切换房东 */
export function gratefulSwitchGrateful(data?: {
  gratefulId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/grateful/switchGrateful`, data, useFetchOptions)
}

/** 出行当前喇叭花未结盟美丽制鞋厂房东甬道 */
export function gratefulUnboundList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListFangDongXinXi['data']> & PromiseLike<UseFetchReturn<ApiResponseListFangDongXinXi['data']>> {
  return useGet<ApiResponseListFangDongXinXi>(`/api/grateful/unbound/list`, data, useFetchOptions)
}
