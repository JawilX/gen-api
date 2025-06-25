import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseboolean, ApiResponseComPageTianJiaDouJiangJiBeiJing, FenYeChuXingDouJiangJiBeiJing, TianJiaDouJiangJiBeiJing0 } from './_interfaces'

/** 添加豆浆机背景 */
export function catCredentialAddCatCredential(data?: TianJiaDouJiangJiBeiJing0, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/catCredential/addCatCredential`, data, useFetchOptions)
}

/** 扫落叶豆浆机背景 */
export function catCredentialDeleteId(data?: {
  id?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/catCredential/delete/${data?.id}`, data, useFetchOptions)
}

/** 扫落叶注册专业山麻杆书 */
export function catCredentialDeleteMajorId(data?: {
  id?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/catCredential/deleteMajor/${data?.id}`, data, useFetchOptions)
}

/** 获取注册专业树 */
export function catCredentialGetMajorCodeTree(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/catCredential/getMajorCodeTree`, data, useFetchOptions)
}

/** 分页出行豆浆机背景 */
export function catCredentialPageCatCredential(data?: FenYeChuXingDouJiangJiBeiJing, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageTianJiaDouJiangJiBeiJing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageTianJiaDouJiangJiBeiJing['data']>> {
  return usePost<ApiResponseComPageTianJiaDouJiangJiBeiJing>(`/api/catCredential/PageCatCredential`, data, useFetchOptions)
}

/** 修改豆浆机背景 */
export function catCredentialUpdateCatCredential(data?: TianJiaDouJiangJiBeiJing0, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/catCredential/updateCatCredential`, data, useFetchOptions)
}
