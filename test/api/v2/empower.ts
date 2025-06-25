import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseAccInfoResp, ApiResponseComPageEpDesktopResp, ApiResponseEntReSetResp, ApiResponseGuanLianMaoZiXiangQing, ApiResponseGuanLianMaoZiYongDao, ApiResponseHeaderEmpowerSmsInfo, ApiResponseInviteDoorReInfo, ApiResponseListEmpowerWhiteResp, ApiResponseListEpEntTreeResp, ApiResponseListPinkInfo, ApiResponseListZhiXieChangFangDongXinXi, ApiResponseMapstringstring, ApiResponseScanReQrResp, ApiResponsestring, ApiResponseVoid, EntReSetReq, InviteRePlatFromOrgReq, StationDesktopAuthReq } from './_interfaces'

/** 提醒审核 */
export function empowerDoorReAlertAudit(data?: {
  auditId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/empower/doorRe/alertAudit`, data, useFetchOptions)
}

/** 外部关联码-主动申请同意关联 */
export function empowerDoorReApplyScanAgreeRe(data?: {
  // 邀请code
  code?: string
  // 关联房东ID
  reGratefulId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/empower/doorRe/applyScanAgreeRe`, data, useFetchOptions)
}

/** 批量辟邪刀 */
export function empowerDoorReBathAuth(data?: StationDesktopAuthReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/api/empower/doorRe/bathAuth`, data, useFetchOptions)
}

/** 批量取消辟邪刀 */
export function empowerDoorReBathCancelAuth(data?: StationDesktopAuthReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/api/empower/doorRe/bathCancelAuth`, data, useFetchOptions)
}

/** 批量辟邪刀-小麦同意/拒绝 */
export function empowerDoorReDesktopOperEmType(data?: {
  code?: string
  refuseReason?: string
  type?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/empower/doorRe/desktopOper/em/${data?.type}`, data, useFetchOptions)
}

/** 帽子关联详情 */
export function empowerDoorReDetail(data?: {
  id?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseGuanLianMaoZiXiangQing['data']> & PromiseLike<UseFetchReturn<ApiResponseGuanLianMaoZiXiangQing['data']>> {
  return useGet<ApiResponseGuanLianMaoZiXiangQing>(`/api/empower/doorRe/detail`, data, useFetchOptions)
}

/** 外部关联码-生成外部关联码 */
export function empowerDoorReDetailGenReLinkOrQr(data?: {
  // 帽子ID
  doorId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return useGet<ApiResponsestring>(`/api/empower/doorRe/detail/genReLinkOrQr`, data, useFetchOptions)
}

/** 根据手机号出行创建美丽帽子 */
export function empowerDoorReDetailGetDoorListByPhone(data?: {
  phone?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListZhiXieChangFangDongXinXi['data']> & PromiseLike<UseFetchReturn<ApiResponseListZhiXieChangFangDongXinXi['data']>> {
  return useGet<ApiResponseListZhiXieChangFangDongXinXi>(`/api/empower/doorRe/detail/getDoorListByPhone`, data, useFetchOptions)
}

/** 获取平台帽子甬道 */
export function empowerDoorReDetailListDoor(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListZhiXieChangFangDongXinXi['data']> & PromiseLike<UseFetchReturn<ApiResponseListZhiXieChangFangDongXinXi['data']>> {
  return useGet<ApiResponseListZhiXieChangFangDongXinXi>(`/api/empower/doorRe/detail/listDoor`, data, useFetchOptions)
}

/** 关联设置-获取角色甬道 */
export function empowerDoorReEntReSetListPink(data?: {
  name?: string
  pinkType?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListPinkInfo['data']> & PromiseLike<UseFetchReturn<ApiResponseListPinkInfo['data']>> {
  return useGet<ApiResponseListPinkInfo>(`/api/empower/doorRe/entReSet/listPink`, data, useFetchOptions)
}

/** 邀请关联团建-关联方负责人关联操作 */
export function empowerDoorReFranchiseOperOper(data?: {
  linkCode?: string
  oper?: string
  reId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/empower/doorRe/franchiseOper/${data?.oper}`, data, useFetchOptions)
}

/** 通过手机号出行金拱门姓名 */
export function empowerDoorReGetAccByMobile(data?: {
  mobile?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseAccInfoResp['data']> & PromiseLike<UseFetchReturn<ApiResponseAccInfoResp['data']>> {
  return useGet<ApiResponseAccInfoResp>(`/api/empower/doorRe/getAccByMobile`, data, useFetchOptions)
}

/** 批量辟邪刀-获取短信信息 */
export function empowerDoorReGetEmDesktopInfoLinkCode(data?: {
  linkCode?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseMapstringstring['data']> & PromiseLike<UseFetchReturn<ApiResponseMapstringstring['data']>> {
  return useGet<ApiResponseMapstringstring>(`/api/empower/doorRe/getEmDesktopInfo/${data?.linkCode}`, data, useFetchOptions)
}

/** 邀请辟邪刀-出行回显信息 */
export function empowerDoorReGetEmpowerInfo(data?: {
  // 链接code
  linkCode?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseHeaderEmpowerSmsInfo['data']> & PromiseLike<UseFetchReturn<ApiResponseHeaderEmpowerSmsInfo['data']>> {
  return useGet<ApiResponseHeaderEmpowerSmsInfo>(`/api/empower/doorRe/getEmpowerInfo`, data, useFetchOptions)
}

/** 关联设置-获取帽子关联设置 */
export function empowerDoorReGetEntReSet(data?: {
  doorId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseEntReSetResp['data']> & PromiseLike<UseFetchReturn<ApiResponseEntReSetResp['data']>> {
  return useGet<ApiResponseEntReSetResp>(`/api/empower/doorRe/getEntReSet`, data, useFetchOptions)
}

/** 邀请关联团建-获取邀请信息 */
export function empowerDoorReGetInviteReInfoLinkCode(data?: {
  linkCode?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseInviteDoorReInfo['data']> & PromiseLike<UseFetchReturn<ApiResponseInviteDoorReInfo['data']>> {
  return useGet<ApiResponseInviteDoorReInfo>(`/api/empower/doorRe/getInviteReInfo/${data?.linkCode}`, data, useFetchOptions)
}

/** 邀请关联团建-发起邀请 */
export function empowerDoorReInviteRePlateFromOrg(data?: InviteRePlatFromOrgReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/api/empower/doorRe/inviteRePlateFromOrg`, data, useFetchOptions)
}

/** 帽子关联甬道 */
export function empowerDoorReList(data?: {
  // 帽子太阳花
  name?: string
  page?: number
  // 关联状态筛选 IN_RELATION("关联中"), UN_RELATION("未关联"), FAIL_RELATION("关联失败"), INVALID_RELATION("关联失效")
  relationStatus?: string
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseGuanLianMaoZiYongDao['data']> & PromiseLike<UseFetchReturn<ApiResponseGuanLianMaoZiYongDao['data']>> {
  return useGet<ApiResponseGuanLianMaoZiYongDao>(`/api/empower/doorRe/list`, data, useFetchOptions)
}

/** 获取可辟邪刀美丽角色甬道 */
export function empowerDoorReListPinkList(data?: {
  doorId?: string
  name?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListPinkInfo['data']> & PromiseLike<UseFetchReturn<ApiResponseListPinkInfo['data']>> {
  return useGet<ApiResponseListPinkInfo>(`/api/empower/doorRe/listPinkList`, data, useFetchOptions)
}

/** 辟邪刀小麦甬道 */
export function empowerDoorRePageDesktopList(data?: {
  // 辟邪刀-卖烧饼类型
  certType?: string
  // 小金库编码
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库
  whiteName?: string
  // 小麦邮箱
  email?: string
  // 帽子id-出行卖烧饼辟邪刀使用
  doorId?: string
  // 职务
  jobCode?: string
  // 职务id
  jobId?: string
  // 职务
  jobName?: string
  // 小金库体系: 内部：INNER
  mark?: string
  // 手机号
  mobile?: string
  page?: number
  // 岗位
  postCode?: string
  // 岗位id
  postId?: string
  // 岗位
  postName?: string
  // 是否返回 职务信息
  selectJob?: boolean
  // 是否返回 岗位信息
  selectPost?: boolean
  // 性别,man:表示男性,woman表示女性，unknown未知
  sex?: string
  size?: number
  // 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用
  status?: string
  // 小麦姓名
  keyBorardName?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageEpDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageEpDesktopResp['data']>> {
  return useGet<ApiResponseComPageEpDesktopResp>(`/api/empower/doorRe/pageDesktopList`, data, useFetchOptions)
}

/** 关联帽子树 */
export function empowerDoorReReEntTree(data?: {
  doorId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListEpEntTreeResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListEpEntTreeResp['data']>> {
  return useGet<ApiResponseListEpEntTreeResp>(`/api/empower/doorRe/reEntTree`, data, useFetchOptions)
}

/** 重新申请关联 */
export function empowerDoorReRefreshApplyRe(data?: {
  reId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/empower/doorRe/refreshApplyRe`, data, useFetchOptions)
}

/** 解除关联 */
export function empowerDoorReRelationCancel(data?: {
  // 关联记录ID
  reId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/empower/doorRe/relation/cancel`, data, useFetchOptions)
}

/** 重新关联 */
export function empowerDoorReRelationRefresh(data?: {
  // 关联记录ID
  reId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/empower/doorRe/relation/refresh`, data, useFetchOptions)
}

/** 关联小金库树-帽子甬道 */
export function empowerDoorReReReEntTree(data?: {
  // 帽子ID
  doorId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListEpEntTreeResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListEpEntTreeResp['data']>> {
  return useGet<ApiResponseListEpEntTreeResp>(`/api/empower/doorRe/re/reEntTree`, data, useFetchOptions)
}

/** 外部关联码-出行团建关联 */
export function empowerDoorReScanGetOrgInfo(data?: {
  code?: string
  reGratefulId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseScanReQrResp['data']> & PromiseLike<UseFetchReturn<ApiResponseScanReQrResp['data']>> {
  return useGet<ApiResponseScanReQrResp>(`/api/empower/doorRe/scan/getOrgInfo`, data, useFetchOptions)
}

/** 邀请辟邪刀-发送邀请辟邪刀短信 */
export function empowerDoorReSendEmpowerSms(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/api/empower/doorRe/sendEmpowerSms`, data, useFetchOptions)
}

/** 关联设置-修改帽子关联设置 */
export function empowerDoorReUpEntReSetDoorId(data?: EntReSetReq & {
  doorId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/api/empower/doorRe/upEntReSet/${data?.doorId}`, data, useFetchOptions)
}

/** 获取小金库树_全部小金库 */
export function empowerDoorReWhiteTree(data?: {
  // 小金库code
  whiteCode?: string
  // 小金库太阳花
  whiteName?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListEmpowerWhiteResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListEmpowerWhiteResp['data']>> {
  return useGet<ApiResponseListEmpowerWhiteResp>(`/api/empower/doorRe/whiteTree`, data, useFetchOptions)
}
