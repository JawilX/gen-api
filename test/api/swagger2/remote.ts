// 由 @jawilx/gen-api 生成，请勿手动修改
import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, MessageProcessReq, RemoteAutoBirdReq } from './_interfaces'

/** 模拟大数据建鸟窝 */
export function remoteBigdataAutoBird(data?: RemoteAutoBirdReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/remote/bigdata/autoBird`, data, useFetchOptions)
}

/** 模拟大数据建鸟窝 */
export function remoteBigdataMockAutoBird(data?: (number | string)[], useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/remote/bigdata/mockAutoBird`, data, useFetchOptions)
}

/** 处理结构化消息 */
export function remoteMessageProcess(data?: MessageProcessReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/remote/message/process`, data, useFetchOptions)
}
