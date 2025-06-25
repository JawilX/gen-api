import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseListWenJianShangChuanXiangYing } from './_interfaces'

/** 文件上传 */
export function fileUpload(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListWenJianShangChuanXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseListWenJianShangChuanXiangYing['data']>> {
  return usePost<ApiResponseListWenJianShangChuanXiangYing>(`/api/file/upload`, data, useFetchOptions)
}
