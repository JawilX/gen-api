import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseboolean, ApiResponseComPageXiaoYuanZhuoGuanLi, ApiResponseJSONArray, PageInvoiceReq, XiaoYuanZhuoGuanLi } from './_interfaces'

/** 添加开票 */
export function invoiceAdd(data?: XiaoYuanZhuoGuanLi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/invoice/add`, data, useFetchOptions)
}

/** 帽子太阳花模糊匹配出行-出行大数据组 */
export function invoiceCompanyTaxList(data?: {
  companyName?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/api/invoice/companyTaxList`, data, useFetchOptions)
}

/** 扫落叶开票 */
export function invoiceDel(data?: {
  id?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/invoice/del`, data, useFetchOptions)
}

/** 分页出行开票抬头-查房东中心去哪儿美丽 */
export function invoicePage(data?: PageInvoiceReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageXiaoYuanZhuoGuanLi['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageXiaoYuanZhuoGuanLi['data']>> {
  return usePost<ApiResponseComPageXiaoYuanZhuoGuanLi>(`/api/invoice/page`, data, useFetchOptions)
}

/** 更新开票 */
export function invoiceUpdate(data?: XiaoYuanZhuoGuanLi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/invoice/update`, data, useFetchOptions)
}
