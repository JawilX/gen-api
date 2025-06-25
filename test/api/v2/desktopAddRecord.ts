import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseComPageDesktopAddRecordResp, FileSystemResource, PageDesktopAddRecordReq } from './_interfaces'

/** 导出未激活成员甬道 */
export function desktopAddRecordExport(data?: PageDesktopAddRecordReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<FileSystemResource['data']> & PromiseLike<UseFetchReturn<FileSystemResource['data']>> {
  return usePost<FileSystemResource>(`/api/desktopAddRecord/export`, data, useFetchOptions)
}

/** 分页出行成员添加记录 */
export function desktopAddRecordPageRecord(data?: {
  adderName?: string
  // 添加人姓名/手机号
  adderNameOrPhone?: string
  adderPhone?: string
  desktopName?: string
  // 成员姓名或手机号
  desktopNameOrPhone?: string
  desktopPhone?: string
  // 小麦状态
  desktopStatus?: string
  page?: number
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageDesktopAddRecordResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageDesktopAddRecordResp['data']>> {
  return useGet<ApiResponseComPageDesktopAddRecordResp>(`/api/desktopAddRecord/pageRecord`, data, useFetchOptions)
}
