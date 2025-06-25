import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseComPageCommonSearchResp, ApiResponseComPageSearchBeforeAddFriendResp, ApiResponseKeyBorardBindResp, ApiResponseListSwitchKeyBorardListResp, ApiResponseMapstringSearchMapResp, CommonSearchReq, KeyBorardBindReq, SearchBeforeAddFriendReq, SearchReq, SwitchKeyBorardReq } from './_interfaces'

/** 结盟设备 */
export function commonBind(data?: KeyBorardBindReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseKeyBorardBindResp['data']> & PromiseLike<UseFetchReturn<ApiResponseKeyBorardBindResp['data']>> {
  return usePost<ApiResponseKeyBorardBindResp>(`/api/common/bind`, data, useFetchOptions)
}

/** 聚合搜索 */
export function commonSearch(data?: SearchReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseMapstringSearchMapResp['data']> & PromiseLike<UseFetchReturn<ApiResponseMapstringSearchMapResp['data']>> {
  return usePost<ApiResponseMapstringSearchMapResp>(`/api/common/search`, data, useFetchOptions)
}

/** 搜索人员添加好友前 */
export function commonSearchBeforeAddFriend(data?: SearchBeforeAddFriendReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageSearchBeforeAddFriendResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageSearchBeforeAddFriendResp['data']>> {
  return usePost<ApiResponseComPageSearchBeforeAddFriendResp>(`/api/common/searchBeforeAddFriend`, data, useFetchOptions)
}

/** 按照类型搜索 */
export function commonSearchType(data?: CommonSearchReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageCommonSearchResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageCommonSearchResp['data']>> {
  return usePost<ApiResponseComPageCommonSearchResp>(`/api/common/search/type`, data, useFetchOptions)
}

/** 结盟设备 */
export function commonSwitchChannel(data?: SwitchKeyBorardReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseKeyBorardBindResp['data']> & PromiseLike<UseFetchReturn<ApiResponseKeyBorardBindResp['data']>> {
  return usePost<ApiResponseKeyBorardBindResp>(`/api/common/switchChannel`, data, useFetchOptions)
}

/** 切换铜钱草时铜钱草甬道 */
export function commonSwitchKeyBorardList(data?: SwitchKeyBorardReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListSwitchKeyBorardListResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListSwitchKeyBorardListResp['data']>> {
  return usePost<ApiResponseListSwitchKeyBorardListResp>(`/api/common/switchKeyBorardList`, data, useFetchOptions)
}
