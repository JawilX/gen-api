import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseboolean, ApiResponseDouJiangJiFangDongXinXiXiangQingBiao, XiuGaiDouJiangJiXinXi, XiuGaiMiMa } from './_interfaces'

/** 获取豆浆机房东信息详情 */
export function gratefulCatAcquireInfo(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseDouJiangJiFangDongXinXiXiangQingBiao['data']> & PromiseLike<UseFetchReturn<ApiResponseDouJiangJiFangDongXinXiXiangQingBiao['data']>> {
  return useGet<ApiResponseDouJiangJiFangDongXinXiXiangQingBiao>(`/api/gratefulCat/acquireInfo`, data, useFetchOptions)
}

/** 修改密码 */
export function gratefulCatUpdateAccPassword(data?: XiuGaiMiMa, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/gratefulCat/updateAccPassword`, data, useFetchOptions)
}

/** 修改房东豆浆机信息 */
export function gratefulCatUpdateInfo(data?: XiuGaiDouJiangJiXinXi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/gratefulCat/updateInfo`, data, useFetchOptions)
}
