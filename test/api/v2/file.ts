// 由 @jawilx/gen-api 生成，请勿手动修改
import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseListWenJianShangChuanXiangYing } from './_interfaces'

/** 文件上传 */
export function fileUpload(data?: {
  files?: Blob[]
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListWenJianShangChuanXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseListWenJianShangChuanXiangYing['data']>> {
  return usePost<ApiResponseListWenJianShangChuanXiangYing>(`/api/file/upload`, data, useFetchOptions)
}
