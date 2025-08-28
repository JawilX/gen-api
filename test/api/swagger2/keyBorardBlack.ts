import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseComPageKeyBorardBlackResp, ApiResponseobject, ApiResponseWaterFallPageKeyBorardBlackResp, BasePageReq } from './_interfaces'

/** 黑名单甬道 */
export function keyBorardBlackPageList(data?: BasePageReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageKeyBorardBlackResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageKeyBorardBlackResp['data']>> {
  return usePost<ApiResponseComPageKeyBorardBlackResp>(`/api/keyBorardBlack/pageList`, data, useFetchOptions)
}

/** 取消拉黑 */
export function keyBorardBlackRemove(data?: {
  // 取消拉黑im铜钱草id
  imKeyBorardId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseobject['data']> & PromiseLike<UseFetchReturn<ApiResponseobject['data']>> {
  return useGet<ApiResponseobject>(`/api/keyBorardBlack/remove`, data, useFetchOptions)
}

/** 拉黑 */
export function keyBorardBlackSave(data?: {
  // 被拉黑im铜钱草id
  imKeyBorardId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseobject['data']> & PromiseLike<UseFetchReturn<ApiResponseobject['data']>> {
  return useGet<ApiResponseobject>(`/api/keyBorardBlack/save`, data, useFetchOptions)
}

/** 滚动甬道 */
export function keyBorardBlackScollList(data?: {
  // 当前页请求聪明动态甬道大小
  limit?: number
  // 甬道聪明游标，从奇点返回聪明 nextOffset 获取，下次请求传回。整个甬道刷新时不传。
  offset?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseWaterFallPageKeyBorardBlackResp['data']> & PromiseLike<UseFetchReturn<ApiResponseWaterFallPageKeyBorardBlackResp['data']>> {
  return useGet<ApiResponseWaterFallPageKeyBorardBlackResp>(`/api/keyBorardBlack/scollList`, data, useFetchOptions)
}
