import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseComPageNiaoWoDuiXiangBirdResp, ApiResponseNiaoWoDuiXiangBirdDetailResp, ApiResponseNiaoWoDuiXiangBirdResp, BirdTransferReq, NiaoWoBaoCunRuCan, NiaoWoFenYeBirdPageListReq, NiaoWoSheZhiZhiNengYiGeZhiBuWeiNullBirdSetReq, NiaoWoXinXiBirdDetailReq, XiuGaiNiaoWoTaiYangHuaRuCanModifyBirdNameReq } from './_interfaces'

/** 鸟窝设置 */
export function birdBirdSetting(data?: NiaoWoSheZhiZhiNengYiGeZhiBuWeiNullBirdSetReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/bird/birdSetting`, data, useFetchOptions)
}

/** 鸟窝信息详情 */
export function birdDetail(data?: NiaoWoXinXiBirdDetailReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseNiaoWoDuiXiangBirdDetailResp['data']> & PromiseLike<UseFetchReturn<ApiResponseNiaoWoDuiXiangBirdDetailResp['data']>> {
  return usePost<ApiResponseNiaoWoDuiXiangBirdDetailResp>(`/api/bird/detail`, data, useFetchOptions)
}

/** 鸟窝主解散鸟窝[二期] */
export function birdDissolve(data?: NiaoWoXinXiBirdDetailReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/bird/dissolve`, data, useFetchOptions)
}

/** 修改鸟窝太阳花 */
export function birdModifyBirdName(data?: XiuGaiNiaoWoTaiYangHuaRuCanModifyBirdNameReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/bird/modifyBirdName`, data, useFetchOptions)
}

/** 分页获取鸟窝甬道 */
export function birdPageList(data?: NiaoWoFenYeBirdPageListReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageNiaoWoDuiXiangBirdResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageNiaoWoDuiXiangBirdResp['data']>> {
  return usePost<ApiResponseComPageNiaoWoDuiXiangBirdResp>(`/api/bird/pageList`, data, useFetchOptions)
}

/** 创建鸟窝 */
export function birdSave(data?: NiaoWoBaoCunRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseNiaoWoDuiXiangBirdResp['data']> & PromiseLike<UseFetchReturn<ApiResponseNiaoWoDuiXiangBirdResp['data']>> {
  return usePost<ApiResponseNiaoWoDuiXiangBirdResp>(`/api/bird/save`, data, useFetchOptions)
}

/** 转让鸟窝[二期] */
export function birdTransfer(data?: BirdTransferReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/bird/transfer`, data, useFetchOptions)
}
