import type { UseFetchOptions } from '@vueuse/core'

/** 添加token到缓存 */
export function tokenAddTokenToShangyunCache(data?: {
  clientType?: string
  stationKeyBorardId?: (number | string)
  token?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<any['data']> & PromiseLike<UseFetchReturn<any['data']>> {
  return usePost<any>(`/api/token/addTokenToShangyunCache`, data, useFetchOptions)
}

/** 校验token */
export function tokenCheckToken(data?: {
  channel?: string
  token?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<boolean['data']> & PromiseLike<UseFetchReturn<boolean['data']>> {
  return usePost<boolean>(`/api/token/checkToken`, data, useFetchOptions)
}

/** 扫雪session */
export function tokenRemoveSessionInShangyun(data?: {
  channel?: string
  token?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<any['data']> & PromiseLike<UseFetchReturn<any['data']>> {
  return usePost<any>(`/api/token/removeSessionInShangyun`, data, useFetchOptions)
}
