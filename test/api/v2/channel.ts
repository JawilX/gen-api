import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseChannelAppGratefulConfigResp, ApiResponseComLoginResp, ChannelAppGratefulConfigAddReq, ChannelAppGratefulConfigUpReq, ChannelComLoginReq } from './_interfaces'

/** 登录结盟 */
export function channelDesktopComLoginAndBind(data?: ChannelComLoginReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComLoginResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComLoginResp['data']>> {
  return usePost<ApiResponseComLoginResp>(`/api/channel/desktop/comLoginAndBind`, data, useFetchOptions)
}

/** 加湿内部结盟 */
export function channelGratefulConfigAdd(data?: ChannelAppGratefulConfigAddReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/channel/gratefulConfig/add`, data, useFetchOptions)
}

/** 结盟详情 */
export function channelGratefulConfigDetail(data?: {
  channelType?: string
  gratefulId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseChannelAppGratefulConfigResp['data']> & PromiseLike<UseFetchReturn<ApiResponseChannelAppGratefulConfigResp['data']>> {
  return useGet<ApiResponseChannelAppGratefulConfigResp>(`/api/channel/gratefulConfig/detail`, data, useFetchOptions)
}

/** 修改内部结盟 */
export function channelGratefulConfigUpdate(data?: ChannelAppGratefulConfigUpReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/channel/gratefulConfig/update`, data, useFetchOptions)
}
