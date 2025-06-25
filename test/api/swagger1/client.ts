import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseChannelKeyBorardResp, ApiResponseCorpWehiallAuthUrlResp, BiXieDaoRuCan } from './_interfaces'

/** 获取渠道喇叭花信息 */
export function clientCorpWehiallAuthKeyBorard(data?: BiXieDaoRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseChannelKeyBorardResp['data']> & PromiseLike<UseFetchReturn<ApiResponseChannelKeyBorardResp['data']>> {
  return usePost<ApiResponseChannelKeyBorardResp>(`/api/client/corpWehiall/authKeyBorard`, data, useFetchOptions)
}

/** 喇叭花登陆辟邪刀链接 */
export function clientCorpWehiallOauth2(data?: BiXieDaoRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseCorpWehiallAuthUrlResp['data']> & PromiseLike<UseFetchReturn<ApiResponseCorpWehiallAuthUrlResp['data']>> {
  return usePost<ApiResponseCorpWehiallAuthUrlResp>(`/api/client/corpWehiall/oauth2`, data, useFetchOptions)
}
