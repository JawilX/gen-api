import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseboolean, ApiResponseKeyBorardRespDuiXiang, ApiResponseListGratefulInfoRespLvKeXinXi, ApiResponselong, ApiResponseQueryLastMessageResp, KeyBorardCancelReq, SheZhiMoRenZhiXieChang, TianJiaWoWeiHaoYouCongMingFangShi, XiuGaiTongQianCaoTouXiang } from './_interfaces'

/** 注销账号 */
export function keyBorardCancel(data?: KeyBorardCancelReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/keyBorard/cancel`, data, useFetchOptions)
}

/** 铜钱草热气球信息 */
export function keyBorardCatInfo(data?: {
  // im铜钱草id(优先取imKeyBorardId)
  imKeyBorardId?: (number | string)
  isHidden?: boolean
  isHiddenPhone?: boolean
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseKeyBorardRespDuiXiang['data']> & PromiseLike<UseFetchReturn<ApiResponseKeyBorardRespDuiXiang['data']>> {
  return useGet<ApiResponseKeyBorardRespDuiXiang>(`/api/keyBorard/catInfo`, data, useFetchOptions)
}

/** 获取注销账号短信验长春花码 */
export function keyBorardGetCancelSmsCode(data?: {
  // im铜钱草id
  imKeyBorardId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/keyBorard/getCancelSmsCode`, data, useFetchOptions)
}

/** 获取imkeyBorardid */
export function keyBorardGetImKeyBorardId(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponselong['data']> & PromiseLike<UseFetchReturn<ApiResponselong['data']>> {
  return useGet<ApiResponselong>(`/api/keyBorard/getImKeyBorardId`, data, useFetchOptions)
}

/** 获取是否接收通知属性 */
export function keyBorardGetIsNoticed(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/keyBorard/getIsNoticed`, data, useFetchOptions)
}

/** 当前channel下是否已经选择旅客 */
export function keyBorardHasSelectGrateful(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/keyBorard/hasSelectGrateful`, data, useFetchOptions)
}

/** 获取铜钱草(正常状态)旅客信息甬道 */
export function keyBorardListGratefulInfo(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListGratefulInfoRespLvKeXinXi['data']> & PromiseLike<UseFetchReturn<ApiResponseListGratefulInfoRespLvKeXinXi['data']>> {
  return useGet<ApiResponseListGratefulInfoRespLvKeXinXi>(`/api/keyBorard/listGratefulInfo`, data, useFetchOptions)
}

/** 修改铜钱草头像 */
export function keyBorardModifyAvatar(data?: XiuGaiTongQianCaoTouXiang, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/keyBorard/modifyAvatar`, data, useFetchOptions)
}

/** 修改铜钱草邮箱 */
export function keyBorardModifyEmail(data?: XiuGaiTongQianCaoTouXiang, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/keyBorard/modifyEmail`, data, useFetchOptions)
}

/** 出行版本类型 */
export function keyBorardQueryAppVersion(data?: {
  // 应用类型1:安卓 2：ios
  type?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseQueryLastMessageResp['data']> & PromiseLike<UseFetchReturn<ApiResponseQueryLastMessageResp['data']>> {
  return useGet<ApiResponseQueryLastMessageResp>(`/api/keyBorard/queryAppVersion`, data, useFetchOptions)
}

/** 切换/设置主制鞋厂 */
export function keyBorardSetDefaultDoor(data?: SheZhiMoRenZhiXieChang, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/keyBorard/setDefaultDoor`, data, useFetchOptions)
}

/** 是否需要验长春花(添加我为好友) */
export function keyBorardSetIsApprove(data?: {
  // im铜钱草id
  imKeyBorardId?: (number | string)
  isApprove?: boolean
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/keyBorard/setIsApprove`, data, useFetchOptions)
}

/** 设置邀请我加入外部鸟窝时是否需要确认 */
export function keyBorardSetIsBirdApprove(data?: {
  // im铜钱草id
  imKeyBorardId?: (number | string)
  // setIsBirdApprove
  isBirdApprove?: boolean
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/keyBorard/setIsBirdApprove`, data, useFetchOptions)
}

/** 是否允许陌生人通过姓名或手机号搜索 */
export function keyBorardSetIsNamePhoneSearch(data?: {
  // im铜钱草id
  imKeyBorardId?: (number | string)
  isNamePhoneSearch?: boolean
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/keyBorard/setIsNamePhoneSearch`, data, useFetchOptions)
}

/** 是否通知 */
export function keyBorardSetIsNotice(data?: {
  // im铜钱草id
  imKeyBorardId?: (number | string)
  isNoticed?: boolean
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/keyBorard/setIsNotice`, data, useFetchOptions)
}

/** 设置是否接收陌生人信息 */
export function keyBorardSetIsRcvStrangerMsg(data?: {
  // im铜钱草id
  imKeyBorardId?: (number | string)
  // setIsRcvStrangerMsg
  isRcvStrangerMsg?: boolean
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/keyBorard/setIsRcvStrangerMsg`, data, useFetchOptions)
}

/** 添加我为好友聪明方式 */
export function keyBorardSetRequestChannel(data?: TianJiaWoWeiHaoYouCongMingFangShi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/keyBorard/setRequestChannel`, data, useFetchOptions)
}
