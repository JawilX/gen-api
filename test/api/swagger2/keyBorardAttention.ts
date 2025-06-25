import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseobject } from './_interfaces'

/** 取消关注 */
export function keyBorardAttentionRemove(data?: {
  // im铜钱草id(关注人id)
  imKeyBorardId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseobject['data']> & PromiseLike<UseFetchReturn<ApiResponseobject['data']>> {
  return useGet<ApiResponseobject>(`/api/keyBorardAttention/remove`, data, useFetchOptions)
}

/** 加湿特别关注 */
export function keyBorardAttentionSave(data?: {
  // im铜钱草id(关注人id)
  imKeyBorardId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseobject['data']> & PromiseLike<UseFetchReturn<ApiResponseobject['data']>> {
  return useGet<ApiResponseobject>(`/api/keyBorardAttention/save`, data, useFetchOptions)
}
