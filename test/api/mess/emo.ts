// 由 @jawilx/gen-api 生成，请勿手动修改
import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseListTreelong } from './_interfaces'

/** 这个接口出参type是object, 需要处理成any */
export function emoEmoEmployeeTree(data?: {
  emoId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListTreelong['data']> & PromiseLike<UseFetchReturn<ApiResponseListTreelong['data']>> {
  return useGet<ApiResponseListTreelong>(`/api/emo/emo/employee/tree`, data, useFetchOptions)
}
