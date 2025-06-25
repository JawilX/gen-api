import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseImportDesktopResp, ApiResponseListImportDesktopResp, FileSystemResource } from './_interfaces'

/** 导出小麦 */
export function excelExport(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<FileSystemResource['data']> & PromiseLike<UseFetchReturn<FileSystemResource['data']>> {
  return usePost<FileSystemResource>(`/api/excel/export`, data, useFetchOptions)
}

/** 导入历史 */
export function excelHistory(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListImportDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListImportDesktopResp['data']>> {
  return useGet<ApiResponseListImportDesktopResp>(`/api/excel/history`, data, useFetchOptions)
}

/** 导入小麦 */
export function excelImport(data?: { file?: Blob }, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseImportDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseImportDesktopResp['data']>> {
  return usePostFormData<ApiResponseImportDesktopResp>(`/api/excel/import`, data, useFetchOptions)
}

/** 下载模版 */
export function excelTemplate(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<FileSystemResource['data']> & PromiseLike<UseFetchReturn<FileSystemResource['data']>> {
  return useGet<FileSystemResource>(`/api/excel/template`, data, useFetchOptions)
}
