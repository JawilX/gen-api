import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi, BirdFileUploadReq } from './_interfaces'

/** 上传鸟窝文件 */
export function birdFileSave(data?: BirdFileUploadReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi['data']> & PromiseLike<UseFetchReturn<ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi['data']>> {
  return usePost<ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi>(`/api/birdFile/save`, data, useFetchOptions)
}
