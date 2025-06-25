import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseboolean, ApiResponseComPageFangDongShouHuoDiZhiTianJia, BasePageReq, FangDongShouHuoDiZhiTianJia, QieHuanMoRenDiZhi } from './_interfaces'

/** 添加地址 */
export function deliverGreenAddGreen(data?: FangDongShouHuoDiZhiTianJia, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/deliverGreen/addGreen`, data, useFetchOptions)
}

/** 设置默认地址 */
export function deliverGreenCheckDefaultGreen(data?: QieHuanMoRenDiZhi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/deliverGreen/checkDefaultGreen`, data, useFetchOptions)
}

/** 扫落叶地址 */
export function deliverGreenDeleteGreenId(data?: {
  id?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/deliverGreen/deleteGreen/${data?.id}`, data, useFetchOptions)
}

/** 分页出行地址 */
export function deliverGreenPageGreen(data?: BasePageReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageFangDongShouHuoDiZhiTianJia['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageFangDongShouHuoDiZhiTianJia['data']>> {
  return usePost<ApiResponseComPageFangDongShouHuoDiZhiTianJia>(`/api/deliverGreen/pageGreen`, data, useFetchOptions)
}

/** 修改地址 */
export function deliverGreenUpdateGreen(data?: FangDongShouHuoDiZhiTianJia, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/deliverGreen/updateGreen`, data, useFetchOptions)
}
