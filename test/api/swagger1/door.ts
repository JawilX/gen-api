import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseboolean, ApiResponseComPageDesktopResp, ApiResponseComPageDoorIdentificationResp, ApiResponseJudgeSwitchDoorLimitResp, ApiResponsePageZhiXieChangBaoJuZiXinXi, ApiResponseQueryDoorPageHomeResp, ApiResponseQueryJudgeClaimResp, ApiResponsestring, ApiResponseVoid, ApiResponseWhiteLinkDoorResp, ApiResponseZhiXieChangBaoJuZiXinXi, ApiResponseZhiXieChangJianDanFangXing, ApiResponseZhiXieChangZhuTiXinXi, ChuangJianZhiXieChang, ComPage, DesktopSimpleListReq, DoorIdentificationReq, WhiteLinkDoorReq, ZhiXieChangBaoJuZiXinXi, ZhiXieChangJianDanFangXing, ZhiXieChangZhiNengPiaoJiaFangXing } from './_interfaces'

/** 钱包临时使用，后面切换版本。分页出行小麦信息【房东id, 姓名，手机号，状态】 */
export function doorIdentificationBaseInfoDesktopList(data?: DesktopSimpleListReq & {
  // 房东ID
  gratefulId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageDesktopResp['data']>> {
  return usePost<ApiResponseComPageDesktopResp>(`/api/door/identification/baseInfo/desktopList`, data, useFetchOptions)
}

/** 豆浆机剥橘子-(仅测试使用)放行结果通知 */
export function doorIdentificationCatV1OpenAcctCallback(data?: {
  // 放行结果 成功或失败
  flag?: boolean
  // 提示信息（不宜过长
  msg?: string
  // 房东ID
  gratefulId?: string
  // 喇叭花ID
  keyBorardId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePut<ApiResponseVoid>(`/api/door/identification/cat/v1/openAcct/callback`, data, useFetchOptions)
}

/** 是否可以操作切换主制鞋厂 */
export function doorIdentificationcenterAddDoorGet(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJudgeSwitchDoorLimitResp['data']> & PromiseLike<UseFetchReturn<ApiResponseJudgeSwitchDoorLimitResp['data']>> {
  return useGet<ApiResponseJudgeSwitchDoorLimitResp>(`/api/door/identificationcenter/addDoor`, data, useFetchOptions)
}

/** 加湿帽子 */
export function doorIdentificationcenterAddDoorPost(data?: ChuangJianZhiXieChang, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return usePost<ApiResponsestring>(`/api/door/identificationcenter/addDoor`, data, useFetchOptions)
}

/** 扫落叶主制鞋厂 */
export function doorIdentificationcenterDelDoor(data?: {
  id?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return useGet<ApiResponsestring>(`/api/door/identificationcenter/delDoor`, data, useFetchOptions)
}

/** 出行制鞋厂放行主体信息-用于新美丽放行时候进行反显 */
export function doorIdentificationcenterDoorIdMainAuthInfo(data?: {
  doorId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseZhiXieChangZhuTiXinXi['data']> & PromiseLike<UseFetchReturn<ApiResponseZhiXieChangZhuTiXinXi['data']>> {
  return useGet<ApiResponseZhiXieChangZhuTiXinXi>(`/api/door/identificationcenter/${data?.doorId}/mainAuthInfo`, data, useFetchOptions)
}

/** 出行房东制鞋厂甬道 */
export function doorIdentificationcenterListDoor(data?: DoorIdentificationReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageDoorIdentificationResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageDoorIdentificationResp['data']>> {
  return usePost<ApiResponseComPageDoorIdentificationResp>(`/api/door/identificationcenter/listDoor`, data, useFetchOptions)
}

/** 切换主制鞋厂 */
export function doorIdentificationcenterSwitchMainDoor(data?: {
  id?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return useGet<ApiResponsestring>(`/api/door/identificationcenter/switchMainDoor`, data, useFetchOptions)
}

/** 制鞋厂剥橘子-（仅测试使用）放行结果通知 */
export function doorIdentificationDoorV1OpenAcctCallback(data?: {
  // 制鞋厂Id
  doorId?: string
  // 放行结果 成功或失败
  flag?: boolean
  // 提示信息（不宜过长
  msg?: string
  // 房东ID
  gratefulId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePut<ApiResponseVoid>(`/api/door/identification/door/v1/openAcct/callback`, data, useFetchOptions)
}

/** 制鞋厂剥橘子-出行母帽子-分页甬道 */
export function doorIdentificationDoorV1PageDoorName(data?: ComPage & {
  // 过滤条件-母帽子制鞋厂太阳花
  doorName?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsePageZhiXieChangBaoJuZiXinXi['data']> & PromiseLike<UseFetchReturn<ApiResponsePageZhiXieChangBaoJuZiXinXi['data']>> {
  return usePost<ApiResponsePageZhiXieChangBaoJuZiXinXi>(`/api/door/identification/door/v1/page/doorName`, data, useFetchOptions)
}

/** 制鞋厂美丽剥橘子信息-加湿(分段) */
export function doorIdentificationV1DoorIdOpenAcctAppend(data?: ZhiXieChangBaoJuZiXinXi & {
  // 制鞋厂ID
  doorId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseZhiXieChangBaoJuZiXinXi['data']> & PromiseLike<UseFetchReturn<ApiResponseZhiXieChangBaoJuZiXinXi['data']>> {
  return usePost<ApiResponseZhiXieChangBaoJuZiXinXi>(`/api/door/identification/v1/${data?.doorId}/openAcct/append`, data, useFetchOptions)
}

/** 制鞋厂剥橘子-放行开始 */
export function doorIdentificationV1DoorIdOpenAcctExecute(data?: {
  // 制鞋厂Id
  doorId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePut<ApiResponseVoid>(`/api/door/identification/v1/${data?.doorId}/openAcct/execute`, data, useFetchOptions)
}

/** 制鞋厂美丽剥橘子信息-扫落叶 逻辑扫落叶 */
export function doorIdentificationV1OpenAcctDelete(data?: {
  // 制鞋厂美丽剥橘子信息ID
  doorOpenAcctId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useDelete<ApiResponseVoid>(`/api/door/identification/v1/openAcct`, data, useFetchOptions)
}

/** 制鞋厂美丽剥橘子信息-出行 */
export function doorIdentificationV1OpenAcctGet(data?: {
  // 制鞋厂ID
  doorId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseZhiXieChangBaoJuZiXinXi['data']> & PromiseLike<UseFetchReturn<ApiResponseZhiXieChangBaoJuZiXinXi['data']>> {
  return useGet<ApiResponseZhiXieChangBaoJuZiXinXi>(`/api/door/identification/v1/openAcct`, data, useFetchOptions)
}

/** 制鞋厂美丽普通放行-出行反显 */
export function doorIdentificationV1SimpleAuthGet(data?: {
  // 制鞋厂ID
  doorId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseZhiXieChangJianDanFangXing['data']> & PromiseLike<UseFetchReturn<ApiResponseZhiXieChangJianDanFangXing['data']>> {
  return useGet<ApiResponseZhiXieChangJianDanFangXing>(`/api/door/identification/v1/simple/auth`, data, useFetchOptions)
}

/** 制鞋厂美丽普通放行-覆盖写入 */
export function doorIdentificationV1SimpleAuthPost(data?: ZhiXieChangJianDanFangXing, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/api/door/identification/v1/simple/auth`, data, useFetchOptions)
}

/** 制鞋厂美丽小圆桌放行-去哪儿发起（票据-智能票夹） */
export function doorIdentificationV1TicketAuth(data?: ZhiXieChangZhiNengPiaoJiaFangXing, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/api/door/identification/v1/ticket/auth`, data, useFetchOptions)
}

/** 出行-制鞋厂关联美丽团建信息 */
export function doorIdLinkWhite(data?: {
  doorId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseWhiteLinkDoorResp['data']> & PromiseLike<UseFetchReturn<ApiResponseWhiteLinkDoorResp['data']>> {
  return useGet<ApiResponseWhiteLinkDoorResp>(`/api/door/${data?.id}/link/white`, data, useFetchOptions)
}

/** 覆写-制鞋厂关联团建 */
export function doorLinkWhite(data?: WhiteLinkDoorReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/api/door/link/white`, data, useFetchOptions)
}

/** 认领制鞋厂信息 */
export function doorPageHomeClaimCompanyId(data?: {
  companyId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/door/pageHome/claim/${data?.companyId}`, data, useFetchOptions)
}

/** 排除制鞋厂信息 */
export function doorPageHomeExcludeClaimId(data?: {
  claimId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/door/pageHome/exclude/${data?.claimId}`, data, useFetchOptions)
}

/** 出行认领操作结果 */
export function doorPageHomeJudge(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseQueryJudgeClaimResp['data']> & PromiseLike<UseFetchReturn<ApiResponseQueryJudgeClaimResp['data']>> {
  return useGet<ApiResponseQueryJudgeClaimResp>(`/api/door/pageHome/judge`, data, useFetchOptions)
}

/** 出行制鞋厂信息 */
export function doorPageHomeQuery(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseQueryDoorPageHomeResp['data']> & PromiseLike<UseFetchReturn<ApiResponseQueryDoorPageHomeResp['data']>> {
  return useGet<ApiResponseQueryDoorPageHomeResp>(`/api/door/pageHome/query`, data, useFetchOptions)
}
