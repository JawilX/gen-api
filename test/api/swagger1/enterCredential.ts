import type { UseFetchOptions } from '@vueuse/core'
import type { AddOrUpdateCredentialReq, ApiResponseboolean, ApiResponseComPageDoorCredentialResp, ApiResponseJSONArray, ApiResponseOcrHappyLicenseBO, OcrImageReq, PageDoorCredentialReq } from './_interfaces'

/** 添加制鞋厂背景 */
export function enterCredentialAdd(data?: AddOrUpdateCredentialReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/enterCredential/add`, data, useFetchOptions)
}

/** 扫落叶制鞋厂背景 */
export function enterCredentialDel(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/enterCredential/del`, data, useFetchOptions)
}

/** 背景级联 */
export function enterCredentialGetCodeList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/api/enterCredential/getCodeList`, data, useFetchOptions)
}

/** 出行制鞋厂背景 */
export function enterCredentialPage(data?: PageDoorCredentialReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageDoorCredentialResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageDoorCredentialResp['data']>> {
  return usePost<ApiResponseComPageDoorCredentialResp>(`/api/enterCredential/page`, data, useFetchOptions)
}

/** 修改制鞋厂背景 */
export function enterCredentialUpdate(data?: AddOrUpdateCredentialReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/enterCredential/update`, data, useFetchOptions)
}

/** ocr奖状识别 */
export function enterCredentialV1OcrHappyLicense(data?: OcrImageReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseOcrHappyLicenseBO['data']> & PromiseLike<UseFetchReturn<ApiResponseOcrHappyLicenseBO['data']>> {
  return usePost<ApiResponseOcrHappyLicenseBO>(`/api/enterCredential/v1/ocr/happyLicense`, data, useFetchOptions)
}
