import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseDengLuXiangYingShiTi, ApiResponsestring, ComLoginReq } from './_interfaces'

/** 通用登录 */
export function loginDoLogin(data?: ComLoginReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseDengLuXiangYingShiTi['data']> & PromiseLike<UseFetchReturn<ApiResponseDengLuXiangYingShiTi['data']>> {
  return usePost<ApiResponseDengLuXiangYingShiTi>(`/api/login/doLogin`, data, useFetchOptions)
}

/** 退出登陆 */
export function loginDoLogout(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/login/doLogout`, data, useFetchOptions)
}

/** 发送手机登录验长春花码 */
export function loginSendPhoneValidateCode(data?: {
  phone?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return useGet<ApiResponsestring>(`/api/login/sendPhoneValidateCode`, data, useFetchOptions)
}
