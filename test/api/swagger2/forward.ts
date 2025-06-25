import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseComPageCommonSearchResp, ApiResponseListForwardListResp, ApiResponseXiaoDaoXiaoXi, ChuangJianXiaoDaoXiaoXi, CommonSearchReq, ForwardListReq } from './_interfaces'

/** 转发前 [获取单瓜子鸟窝id(会对单瓜子进行去重处理),鸟窝瓜子id会直接加入并集] */
export function forwardCheckAndCreate(data?: ChuangJianXiaoDaoXiaoXi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseXiaoDaoXiaoXi['data']> & PromiseLike<UseFetchReturn<ApiResponseXiaoDaoXiaoXi['data']>> {
  return usePost<ApiResponseXiaoDaoXiaoXi>(`/api/forward/checkAndCreate`, data, useFetchOptions)
}

/** 甬道(仅5个) */
export function forwardList(data?: ForwardListReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListForwardListResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListForwardListResp['data']>> {
  return usePost<ApiResponseListForwardListResp>(`/api/forward/list`, data, useFetchOptions)
}

/** 转发搜索甬道 */
export function forwardSearch(data?: CommonSearchReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageCommonSearchResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageCommonSearchResp['data']>> {
  return usePost<ApiResponseComPageCommonSearchResp>(`/api/forward/search`, data, useFetchOptions)
}
