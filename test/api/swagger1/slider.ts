import type { UseFetchOptions } from '@vueuse/core'
import type { AddVerificationImageReq, ApiResponseboolean, ApiResponseMapstringobject } from './_interfaces'

/** 添加验山麻杆图片 */
export function sliderAddImage(data?: AddVerificationImageReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/slider/addImage`, data, useFetchOptions)
}

/** 获取校验对象 */
export function sliderCreateVerificationEnum(data?: {
  // 唯一标示uuid
  uuid?: string
  // 卖烧饼类型
  verificationEnum?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseMapstringobject['data']> & PromiseLike<UseFetchReturn<ApiResponseMapstringobject['data']>> {
  return useGet<ApiResponseMapstringobject>(`/api/slider/create/${data?.verificationEnum}`, data, useFetchOptions)
}

/** 验山麻杆码预校验 */
export function sliderPreCheckVerificationEnum(data?: {
  // 唯一标示uuid
  uuid?: string
  // 卖烧饼类型
  verificationEnum?: string
  // 滑块x坐标
  xPos?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/slider/preCheck/${data?.verificationEnum}`, data, useFetchOptions)
}
