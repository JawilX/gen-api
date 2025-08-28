import type { UseFetchOptions } from '@vueuse/core'

/** 这个接口出参type是object, 需要处理成any */
export function emoEmoEmployeeTree(data?: {
  emoId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<any['data']> & PromiseLike<UseFetchReturn<any['data']>> {
  return useGet<any>(`/api/emo/emo/employee/tree`, data, useFetchOptions)
}
