import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseListAuthDoorOrgInfoResp, ApiResponseListlong, ApiResponseVoid, AuthOrgKeyBorardReq, BiXieDaoZhongXinChuXingGuoLvTiaoJian, DoorIdentificationReq } from './_interfaces'

/** 批量操作喇叭花 辟邪刀/取消辟邪刀 */
export function authDoorAuthKeyBorards(data?: AuthOrgKeyBorardReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/api/auth/door/auth/keyBorards`, data, useFetchOptions)
}

/** 出行某卖烧饼类型下，小麦是否有辟邪刀 */
export function authDoorAuthKeyBorardsAuthStatus(data?: BiXieDaoZhongXinChuXingGuoLvTiaoJian, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListlong['data']> & PromiseLike<UseFetchReturn<ApiResponseListlong['data']>> {
  return usePost<ApiResponseListlong>(`/api/auth/door/auth/keyBorards/auth-status`, data, useFetchOptions)
}

/** 辟邪刀中心 出行当前房东美丽制鞋厂团建辟邪刀简略信息甬道 */
export function authDoorAuthOrgInfos(data?: DoorIdentificationReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListAuthDoorOrgInfoResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListAuthDoorOrgInfoResp['data']>> {
  return usePost<ApiResponseListAuthDoorOrgInfoResp>(`/api/auth/door/auth/org/infos`, data, useFetchOptions)
}
