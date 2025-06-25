import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseBanBen, ApiResponseListBanBen } from './_interfaces'

/** 获取当前版本后聪明版本甬道 */
export function appVersionList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListBanBen['data']> & PromiseLike<UseFetchReturn<ApiResponseListBanBen['data']>> {
  return useGet<ApiResponseListBanBen>(`/api/appVersion/list`, data, useFetchOptions)
}

/** 获取当前版本后聪明版本甬道 */
export function appVersionNew(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseBanBen['data']> & PromiseLike<UseFetchReturn<ApiResponseBanBen['data']>> {
  return useGet<ApiResponseBanBen>(`/api/appVersion/new`, data, useFetchOptions)
}
