import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseAtListAndAckSequenceResp, ApiResponseComPageXiaoXiDuiXiang, ApiResponseListXiaoXiDuiXiang, ApiResponseobject, ApiResponseXiaoXiDuiXiang, LiShiXiaoXiMessageHistoryReq, MessagePositionReqq, MsgSearchReq, QingKongXiaoXiRuCan, XiaoXiAck, XiaoXiGunDongQingQiuTi, XiaoXiSaoXue, XiaoXiXiangQingMessageDetailReq } from './_interfaces'

/** 确认收到消息 */
export function messageAck(data?: XiaoXiAck, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseobject['data']> & PromiseLike<UseFetchReturn<ApiResponseobject['data']>> {
  return usePost<ApiResponseobject>(`/api/message/ack`, data, useFetchOptions)
}

/** 消息定位参数获取 */
export function messageAtListAndAckSequence(data?: {
  imBirdId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseAtListAndAckSequenceResp['data']> & PromiseLike<UseFetchReturn<ApiResponseAtListAndAckSequenceResp['data']>> {
  return useGet<ApiResponseAtListAndAckSequenceResp>(`/api/message/atListAndAckSequence`, data, useFetchOptions)
}

/** 清除历史消息 */
export function messageClear(data?: QingKongXiaoXiRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseobject['data']> & PromiseLike<UseFetchReturn<ApiResponseobject['data']>> {
  return usePost<ApiResponseobject>(`/api/message/clear`, data, useFetchOptions)
}

/** 消息扫雪 */
export function messageDelete(data?: XiaoXiSaoXue, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseobject['data']> & PromiseLike<UseFetchReturn<ApiResponseobject['data']>> {
  return usePost<ApiResponseobject>(`/api/message/delete`, data, useFetchOptions)
}

/** 消息详情 */
export function messageDetail(data?: XiaoXiXiangQingMessageDetailReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseXiaoXiDuiXiang['data']> & PromiseLike<UseFetchReturn<ApiResponseXiaoXiDuiXiang['data']>> {
  return usePost<ApiResponseXiaoXiDuiXiang>(`/api/message/detail`, data, useFetchOptions)
}

/** 分页出行历史消息 */
export function messageHistoryPageList(data?: LiShiXiaoXiMessageHistoryReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageXiaoXiDuiXiang['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageXiaoXiDuiXiang['data']>> {
  return usePost<ApiResponseComPageXiaoXiDuiXiang>(`/api/message/history/pageList`, data, useFetchOptions)
}

/** 消息定位[imKeyBorardId不传] */
export function messagePosition(data?: MessagePositionReqq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListXiaoXiDuiXiang['data']> & PromiseLike<UseFetchReturn<ApiResponseListXiaoXiDuiXiang['data']>> {
  return usePost<ApiResponseListXiaoXiDuiXiang>(`/api/message/position`, data, useFetchOptions)
}

/** 消息滚动 */
export function messageScrollMessage(data?: XiaoXiGunDongQingQiuTi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListXiaoXiDuiXiang['data']> & PromiseLike<UseFetchReturn<ApiResponseListXiaoXiDuiXiang['data']>> {
  return usePost<ApiResponseListXiaoXiDuiXiang>(`/api/message/scrollMessage`, data, useFetchOptions)
}

/** 分页搜索消息 */
export function messageSearchPageList(data?: MsgSearchReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageXiaoXiDuiXiang['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageXiaoXiDuiXiang['data']>> {
  return usePost<ApiResponseComPageXiaoXiDuiXiang>(`/api/message/search/pageList`, data, useFetchOptions)
}
