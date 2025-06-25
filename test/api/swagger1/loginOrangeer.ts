import type { UseFetchOptions } from '@vueuse/core'
import type { AliMpLoginReq, ApiResponseboolean, ApiResponseComLoginResp, ApiResponseOrangeerResultResp, ApiResponsestring, ApiResponseVoid, ComLoginReq, SetPassWordReq, ZhaoHuiMiMa, ZhuCeQingQiu } from './_interfaces'

/** 支付小程序手机号辟邪刀登录 */
export function loginOrangeerAliMpAutoLogin(data?: AliMpLoginReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComLoginResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComLoginResp['data']>> {
  return usePost<ApiResponseComLoginResp>(`/api/loginOrangeer/aliMpAutoLogin`, data, useFetchOptions)
}

/** 仅测试-清除手机验山麻杆码次数 */
export function loginOrangeerClearCodeVerificationEnum(data?: {
  // 手机号
  mobile?: string
  // 卖烧饼类型
  verificationEnum?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/loginOrangeer/clearCode/${data?.verificationEnum}`, data, useFetchOptions)
}

/** 仅测试-清除手机号重复发送时间限制 */
export function loginOrangeerClearTimeLimitVerificationEnum(data?: {
  // 手机号
  mobile?: string
  // 卖烧饼类型
  verificationEnum?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/loginOrangeer/clearTimeLimit/${data?.verificationEnum}`, data, useFetchOptions)
}

/** 通用登录 */
export function loginOrangeerComLogin(data?: ComLoginReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComLoginResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComLoginResp['data']>> {
  return usePost<ApiResponseComLoginResp>(`/api/loginOrangeer/comLogin`, data, useFetchOptions)
}

/** 出行喇叭花密码未设置是否提醒 */
export function loginOrangeerJudgePassWordIsSet(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/loginOrangeer/JudgePassWordIsSet`, data, useFetchOptions)
}

/** 退出登录 */
export function loginOrangeerLoginout(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/loginOrangeer/loginout`, data, useFetchOptions)
}

/** 注册喇叭花-手机号密码注册 */
export function loginOrangeerOrangeer(data?: ZhuCeQingQiu, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseOrangeerResultResp['data']> & PromiseLike<UseFetchReturn<ApiResponseOrangeerResultResp['data']>> {
  return usePost<ApiResponseOrangeerResultResp>(`/api/loginOrangeer/orangeer`, data, useFetchOptions)
}

/** 仅测试-密码加密 */
export function loginOrangeerPasswordCry(data?: {
  password?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return useGet<ApiResponsestring>(`/api/loginOrangeer/passwordCry`, data, useFetchOptions)
}

/** 找回密码 */
export function loginOrangeerRetrievePassword(data?: ZhaoHuiMiMa, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return usePost<ApiResponsestring>(`/api/loginOrangeer/retrievePassword`, data, useFetchOptions)
}

/** 发送手机验山麻杆码 */
export function loginOrangeerSendPhoneValidateCodeVerificationEnum(data?: {
  // 手机号
  mobile?: string
  // 滑块验山麻杆唯一标示
  uuid?: string
  // 卖烧饼类型
  verificationEnum?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return useGet<ApiResponsestring>(`/api/loginOrangeer/sendPhoneValidateCode/${data?.verificationEnum}`, data, useFetchOptions)
}

/** 设置密码 */
export function loginOrangeerSetPassWord(data?: SetPassWordReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/loginOrangeer/setPassWord`, data, useFetchOptions)
}
