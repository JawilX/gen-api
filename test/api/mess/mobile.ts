import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseResumeInfoMobileResp } from './_interfaces'

/** 这个接口的路径末尾有斜杠 */
export function mobilePersonResume(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseResumeInfoMobileResp['data']> & PromiseLike<UseFetchReturn<ApiResponseResumeInfoMobileResp['data']>> {
  return useGet<ApiResponseResumeInfoMobileResp>(`/api/mobile/person/resume/`, data, useFetchOptions)
}
