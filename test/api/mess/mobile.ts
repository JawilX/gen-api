import type { UseFetchOptions } from '@vueuse/core'

/** 这个接口的路径末尾有斜杠 */
export function mobilePersonResume(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<any['data']> & PromiseLike<UseFetchReturn<any['data']>> {
  return useGet<any>(`/api/mobile/person/resume/`, data, useFetchOptions)
}
