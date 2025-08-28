import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseAddBirdResp, ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp, ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing, ApiResponseListUnreadResp, ApiResponselong, ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp, GetUnreadPageReq, InviteToBirdReq, QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq, QingQiuXiaoXiYongDaoRequestPageListReq, RuNiaoWoQingQiuAddBirdReq, TianJiaHaoYouAddFriendReq, TongGuoJuJueApproveReq } from './_interfaces'

/** 入鸟窝申请 */
export function requestAddBird(data?: RuNiaoWoQingQiuAddBirdReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseAddBirdResp['data']> & PromiseLike<UseFetchReturn<ApiResponseAddBirdResp['data']>> {
  return usePost<ApiResponseAddBirdResp>(`/api/request/addBird`, data, useFetchOptions)
}

/** 添加好友申请 */
export function requestAddFriend(data?: TianJiaHaoYouAddFriendReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/request/addFriend`, data, useFetchOptions)
}

/** 通过/拒绝 */
export function requestApprove(data?: TongGuoJuJueApproveReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/request/approve`, data, useFetchOptions)
}

/** 验长春花消息详情 */
export function requestDetail(data?: {
  requestId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp['data']> & PromiseLike<UseFetchReturn<ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp['data']>> {
  return useGet<ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp>(`/api/request/detail`, data, useFetchOptions)
}

/** 获取未读标识(分页甬道) */
export function requestGetUnreadAttr(data?: GetUnreadPageReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListUnreadResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListUnreadResp['data']>> {
  return usePost<ApiResponseListUnreadResp>(`/api/request/getUnreadAttr`, data, useFetchOptions)
}

/** 未读验长春花消息数量(通讯录页) */
export function requestGetUnreadCount(data?: {
  // im铜钱草id
  imKeyBorardId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponselong['data']> & PromiseLike<UseFetchReturn<ApiResponselong['data']>> {
  return useGet<ApiResponselong>(`/api/request/getUnreadCount`, data, useFetchOptions)
}

/** 邀请入鸟窝 */
export function requestInvite(data?: InviteToBirdReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing['data']>> {
  return usePost<ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing>(`/api/request/invite`, data, useFetchOptions)
}

/** 分页出行验长春花消息 */
export function requestPageList(data?: QingQiuXiaoXiYongDaoRequestPageListReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp['data']>> {
  return usePost<ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp>(`/api/request/pageList`, data, useFetchOptions)
}

/** 标识消息已读 */
export function requestRead(data?: QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/request/read`, data, useFetchOptions)
}

/** 邀请入鸟窝预校验 */
export function requestTryInvite(data?: InviteToBirdReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing['data']>> {
  return usePost<ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing>(`/api/request/tryInvite`, data, useFetchOptions)
}
