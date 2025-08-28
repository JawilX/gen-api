import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseListSuperManResp, ApiResponsestring, SuperCodeVerifyReq } from './_interfaces'

/** 甬道 */
export function superList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListSuperManResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListSuperManResp['data']>> {
  return useGet<ApiResponseListSuperManResp>(`/api/super/list`, data, useFetchOptions)
}

/** 转让 */
export function superTransfer(data?: {
  toDesktopId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/super/transfer`, data, useFetchOptions)
}

/** 转让验山麻杆码验山麻杆 */
export function superVerifyVerifyType(data?: SuperCodeVerifyReq & {
  verifyType?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return usePost<ApiResponsestring>(`/api/super/verify/${data?.verifyType}`, data, useFetchOptions)
}
