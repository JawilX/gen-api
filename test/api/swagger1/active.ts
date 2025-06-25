import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseDesktopNoActiveResp, ApiResponseSendActiveMessageResp, SendActiveMessageReq } from './_interfaces'

/** 根据小金库code出行未激活小麦甬道 */
export function activeNoActiveList(data?: {
  whiteCode?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseDesktopNoActiveResp['data']> & PromiseLike<UseFetchReturn<ApiResponseDesktopNoActiveResp['data']>> {
  return useGet<ApiResponseDesktopNoActiveResp>(`/api/active/noActiveList`, data, useFetchOptions)
}

/** 发送激活消息提示 */
export function activeSendActiveMessage(data?: SendActiveMessageReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseSendActiveMessageResp['data']> & PromiseLike<UseFetchReturn<ApiResponseSendActiveMessageResp['data']>> {
  return usePost<ApiResponseSendActiveMessageResp>(`/api/active/sendActiveMessage`, data, useFetchOptions)
}
