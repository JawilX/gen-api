import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, RequestMsgReqDuiXiang } from './_interfaces'

/** 请求回复消息保存 */
export function requestMsgSave(data?: RequestMsgReqDuiXiang, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/requestMsg/save`, data, useFetchOptions)
}
