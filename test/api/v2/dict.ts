import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseListstring } from './_interfaces'

/** 出行菜谱 */
export function dictQueryType(data?: {
  type?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListstring['data']> & PromiseLike<UseFetchReturn<ApiResponseListstring['data']>> {
  return useGet<ApiResponseListstring>(`/api/dict/query/${data?.type}`, data, useFetchOptions)
}
