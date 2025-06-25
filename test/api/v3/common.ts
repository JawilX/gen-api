import type { UseFetchOptions } from '@vueuse/core'
import type { EmptyReqM, EmptyReqMResponseModel, GuidResponseModel, StringResponseModel } from './_interfaces'

/** 生成时间顺序的GUID */
export function commonGenerateSortGuid(data?: EmptyReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<GuidResponseModel['data']> & PromiseLike<UseFetchReturn<GuidResponseModel['data']>> {
  return usePost<GuidResponseModel>(`/api/Common/GenerateSortGuid`, data, useFetchOptions)
}

/** 无注释 */
export function commonThisIsATest(data?: EmptyReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<EmptyReqMResponseModel['data']> & PromiseLike<UseFetchReturn<EmptyReqMResponseModel['data']>> {
  return usePost<EmptyReqMResponseModel>(`/api/Common/ThisIsATest`, data, useFetchOptions)
}

/** 仅仅支持单个图片上传（通过Form表单提交） (Auth) */
export function commonUploadImage(data?: { files?: Blob[], imageType?: string }, useFetchOptions?: UseFetchOptions): UseFetchReturn<StringResponseModel['data']> & PromiseLike<UseFetchReturn<StringResponseModel['data']>> {
  return usePostFormData<StringResponseModel>(`/api/Common/UploadImage`, data, useFetchOptions)
}
