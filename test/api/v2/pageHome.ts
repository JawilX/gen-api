import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseboolean, ApiResponseListQueryCatPageHomeResp, ApiResponseQueryJudgeClaimResp } from './_interfaces'

/** 认领豆浆机信息 */
export function pageHomeClaimClaimId(data?: {
  claimId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/pageHome/claim/${data?.claimId}`, data, useFetchOptions)
}

/** 排除豆浆机信息 */
export function pageHomeExcludeClaimId(data?: {
  claimId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/pageHome/exclude/${data?.claimId}`, data, useFetchOptions)
}

/** 出行认领操作结果 */
export function pageHomeJudge(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseQueryJudgeClaimResp['data']> & PromiseLike<UseFetchReturn<ApiResponseQueryJudgeClaimResp['data']>> {
  return useGet<ApiResponseQueryJudgeClaimResp>(`/api/pageHome/judge`, data, useFetchOptions)
}

/** 出行放行结果 */
export function pageHomeQuery(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListQueryCatPageHomeResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListQueryCatPageHomeResp['data']>> {
  return useGet<ApiResponseListQueryCatPageHomeResp>(`/api/pageHome/query`, data, useFetchOptions)
}
