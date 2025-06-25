import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, KeyBorardInformSaveReq } from './_interfaces'

/** 保存 */
export function keyBorardInformSave(data?: KeyBorardInformSaveReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/keyBorardInform/save`, data, useFetchOptions)
}
