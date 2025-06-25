import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseAgentConfigResp, ApiResponseChannelKeyBorardResp, ApiResponseCorpWehiallAuthUrlResp, BiXieDaoRuCan, InitAgengConfigReq } from './_interfaces'

/** 获取应用辟邪刀链接 */
export function corpWehiallAppAuthLink(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseCorpWehiallAuthUrlResp['data']> & PromiseLike<UseFetchReturn<ApiResponseCorpWehiallAuthUrlResp['data']>> {
  return useGet<ApiResponseCorpWehiallAuthUrlResp>(`/api/corpWehiall/appAuthLink`, data, useFetchOptions)
}

/** 获取渠道喇叭花信息 */
export function corpWehiallAuthKeyBorard(data?: BiXieDaoRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseChannelKeyBorardResp['data']> & PromiseLike<UseFetchReturn<ApiResponseChannelKeyBorardResp['data']>> {
  return usePost<ApiResponseChannelKeyBorardResp>(`/api/corpWehiall/authKeyBorard`, data, useFetchOptions)
}

/** 初始化企微agent_config */
export function corpWehiallInitAgent(data?: InitAgengConfigReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseAgentConfigResp['data']> & PromiseLike<UseFetchReturn<ApiResponseAgentConfigResp['data']>> {
  return usePost<ApiResponseAgentConfigResp>(`/api/corpWehiall/initAgent`, data, useFetchOptions)
}

/** 喇叭花登陆辟邪刀链接 */
export function corpWehiallOauth2(data?: BiXieDaoRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseCorpWehiallAuthUrlResp['data']> & PromiseLike<UseFetchReturn<ApiResponseCorpWehiallAuthUrlResp['data']>> {
  return usePost<ApiResponseCorpWehiallAuthUrlResp>(`/api/corpWehiall/oauth2`, data, useFetchOptions)
}

/** 同步团建架构 */
export function corpWehiallSyncDoc(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/corpWehiall/syncDoc`, data, useFetchOptions)
}
