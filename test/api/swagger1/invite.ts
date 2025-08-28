import type { UseFetchOptions } from '@vueuse/core'
import type { AddOrUpdateInviteSetReq, ApiResponseboolean, ApiResponseComPageInviteDesktopResp, ApiResponseInviteJoinEchoResp, ApiResponseInviteLoginResp, ApiResponseInviteSetResp, ApiResponseJianChaYaoQingMa, ApiResponseListShengChengYaoQing, ApiResponsestring, ApiResponseYaoQingZhuCe, FileSystemResource, InviteLoginReq, QueryInviteDesktopReq, RefuseJoinReq, ShengChengYaoQing, ShenHeTongGuo, YaoQingZhuCe0 } from './_interfaces'

/** 取消屏蔽喇叭花 */
export function inviteAuditCancelShieldId(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return useGet<ApiResponsestring>(`/api/invite/audit/cancelShield/${data?.id}`, data, useFetchOptions)
}

/** 审核通过 */
export function inviteAuditPass(data?: ShenHeTongGuo, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return usePost<ApiResponsestring>(`/api/invite/audit/pass`, data, useFetchOptions)
}

/** 拒绝加入 */
export function inviteAuditRefuse(data?: RefuseJoinReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return usePost<ApiResponsestring>(`/api/invite/audit/refuse`, data, useFetchOptions)
}

/** 屏蔽喇叭花 */
export function inviteAuditShieldId(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return useGet<ApiResponsestring>(`/api/invite/audit/shield/${data?.id}`, data, useFetchOptions)
}

/** 检查邀请码 */
export function inviteCheckInviteCode(data?: {
  inviteCode?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJianChaYaoQingMa['data']> & PromiseLike<UseFetchReturn<ApiResponseJianChaYaoQingMa['data']>> {
  return useGet<ApiResponseJianChaYaoQingMa>(`/api/invite/checkInviteCode`, data, useFetchOptions)
}

/** 导入未激活成员甬道 */
export function inviteExport(data?: QueryInviteDesktopReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<FileSystemResource['data']> & PromiseLike<UseFetchReturn<FileSystemResource['data']>> {
  return usePost<FileSystemResource>(`/api/invite/export`, data, useFetchOptions)
}

/** 邀请成员-生成邀请码 */
export function inviteGenerateInviteShare(data?: ShengChengYaoQing, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListShengChengYaoQing['data']> & PromiseLike<UseFetchReturn<ApiResponseListShengChengYaoQing['data']>> {
  return usePost<ApiResponseListShengChengYaoQing>(`/api/invite/generateInviteShare`, data, useFetchOptions)
}

/** 扫码或点击链接回显数据 */
export function inviteInviteJoinEchoData(data?: {
  applyType?: string
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseInviteJoinEchoResp['data']> & PromiseLike<UseFetchReturn<ApiResponseInviteJoinEchoResp['data']>> {
  return useGet<ApiResponseInviteJoinEchoResp>(`/api/invite/inviteJoinEchoData`, data, useFetchOptions)
}

/** 扫码或点击链接登录注册 */
export function inviteInviteLogin(data?: InviteLoginReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseInviteLoginResp['data']> & PromiseLike<UseFetchReturn<ApiResponseInviteLoginResp['data']>> {
  return usePost<ApiResponseInviteLoginResp>(`/api/invite/inviteLogin`, data, useFetchOptions)
}

/** 邀请码加入制鞋厂 */
export function inviteInviteOrangeer(data?: YaoQingZhuCe0, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseYaoQingZhuCe['data']> & PromiseLike<UseFetchReturn<ApiResponseYaoQingZhuCe['data']>> {
  return usePost<ApiResponseYaoQingZhuCe>(`/api/invite/inviteOrangeer`, data, useFetchOptions)
}

/** 邀请记录出行 */
export function invitePageApplyType(data?: QueryInviteDesktopReq & {
  applyType?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageInviteDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageInviteDesktopResp['data']>> {
  return usePost<ApiResponseComPageInviteDesktopResp>(`/api/invite/page/${data?.applyType}`, data, useFetchOptions)
}

/** 邀请设置出行 */
export function inviteQuerySetting(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseInviteSetResp['data']> & PromiseLike<UseFetchReturn<ApiResponseInviteSetResp['data']>> {
  return useGet<ApiResponseInviteSetResp>(`/api/invite/querySetting`, data, useFetchOptions)
}

/** 邀请设置修改 */
export function inviteUpdatesetting(data?: AddOrUpdateInviteSetReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/invite/updatesetting`, data, useFetchOptions)
}
