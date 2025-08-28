import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseBiXieDao, ApiResponseComPageBiXieDaoYongDao, ApiResponseVoid, BiXieDao } from './_interfaces'

/** 执行审核 */
export function auditAuthExecute(data?: BiXieDao, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePut<ApiResponseVoid>(`/api/audit/auth/execute`, data, useFetchOptions)
}

/** 辟邪刀详情甬道 */
export function auditAuthInfoList(data?: {
  auditClassification?: string
  id?: (number | string)
  page?: number
  // 成员太阳花或手机号
  queryStr?: string
  size?: number
  // 全部则不传空 BIZ("卖烧饼发起关联"), APPLY("申请关联"), INVITE("邀请关联")
  source?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseBiXieDao['data']> & PromiseLike<UseFetchReturn<ApiResponseBiXieDao['data']>> {
  return useGet<ApiResponseBiXieDao>(`/api/audit/auth/infoList`, data, useFetchOptions)
}

/** 辟邪刀甬道 */
export function auditAuthList(data?: {
  // 帽子太阳花
  name?: string
  page?: number
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageBiXieDaoYongDao['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageBiXieDaoYongDao['data']>> {
  return useGet<ApiResponseComPageBiXieDaoYongDao>(`/api/audit/auth/list`, data, useFetchOptions)
}
