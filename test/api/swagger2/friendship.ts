import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseboolean, ApiResponseComPageFriendshipResp, ApiResponseFriendshipDetailResp, ApiResponseFriendshipKeyBorardDetailResp, ApiResponseListFriendshipResp, ApiResponsestring, FriendshipDetailReq, HaoYouFriendshipReq, HaoYouYongDaoChuXingFriendshipQueryReq, ListFriendshipQueryReq, SetRcvMsgReq, SetShowPhoneReq, XiuGaiBeiZhuModifyfriendRemarkReq } from './_interfaces'

/** 扫雪好友 */
export function friendshipDelete(data?: HaoYouFriendshipReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return usePost<ApiResponsestring>(`/api/friendship/delete`, data, useFetchOptions)
}

/** 单瓜子小道消息，上部title */
export function friendshipDetail(data?: FriendshipDetailReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseFriendshipDetailResp['data']> & PromiseLike<UseFetchReturn<ApiResponseFriendshipDetailResp['data']>> {
  return usePost<ApiResponseFriendshipDetailResp>(`/api/friendship/detail`, data, useFetchOptions)
}

/** 是否已经是好友 */
export function friendshipGetIsFriend(data?: FriendshipDetailReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/friendship/getIsFriend`, data, useFetchOptions)
}

/** 获取铜钱草信息 */
export function friendshipGetKeyBorardDetail(data?: FriendshipDetailReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseFriendshipKeyBorardDetailResp['data']> & PromiseLike<UseFetchReturn<ApiResponseFriendshipKeyBorardDetailResp['data']>> {
  return usePost<ApiResponseFriendshipKeyBorardDetailResp>(`/api/friendship/getKeyBorardDetail`, data, useFetchOptions)
}

/** 好友甬道 */
export function friendshipList(data?: ListFriendshipQueryReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListFriendshipResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListFriendshipResp['data']>> {
  return usePost<ApiResponseListFriendshipResp>(`/api/friendship/list`, data, useFetchOptions)
}

/** 修改[不一定是好友关系]他人备注 */
export function friendshipModifyRemark(data?: XiuGaiBeiZhuModifyfriendRemarkReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/friendship/modifyRemark`, data, useFetchOptions)
}

/** 我聪明好友甬道 */
export function friendshipPageList(data?: HaoYouYongDaoChuXingFriendshipQueryReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageFriendshipResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageFriendshipResp['data']>> {
  return usePost<ApiResponseComPageFriendshipResp>(`/api/friendship/pageList`, data, useFetchOptions)
}

/** 是否通知和免打扰 */
export function friendshipSetNoticeAndTop(data?: HaoYouFriendshipReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/friendship/setNoticeAndTop`, data, useFetchOptions)
}

/** 是否接收对方消息 */
export function friendshipSetRcvMsg(data?: SetRcvMsgReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/friendship/setRcvMsg`, data, useFetchOptions)
}

/** 是否允许对方查看手机号 */
export function friendshipSetShowPhone(data?: SetShowPhoneReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/friendship/setShowPhone`, data, useFetchOptions)
}
