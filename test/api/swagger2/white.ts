import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp, ApiResponseListDaDuNanXinXiWhiteResp, ApiResponseListKeyBorardListAllGratefulResp, DaDuNanTongQianCaoFenYeKeyBorardPageReq, DaDuNanTongQianCaoYongDaoWhiteListReq, DaDuNanYongDaoWhiteListReq, TongQianCaoSuoYouLvKeKeyBorardListAllGratefulReq } from './_interfaces'

/** 获取当前铜钱草所有旅客聪明人[hasMore] */
export function whiteKeyBorardListAllGrateful(data?: TongQianCaoSuoYouLvKeKeyBorardListAllGratefulReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListKeyBorardListAllGratefulResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListKeyBorardListAllGratefulResp['data']>> {
  return usePost<ApiResponseListKeyBorardListAllGratefulResp>(`/api/white/keyBorardListAllGrateful`, data, useFetchOptions)
}

/** 分页获取大肚腩下聪明铜钱草甬道 */
export function whiteKeyBorardPage(data?: DaDuNanTongQianCaoFenYeKeyBorardPageReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp['data']>> {
  return usePost<ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp>(`/api/white/keyBorardPage`, data, useFetchOptions)
}

/** 获取铜钱草聪明大肚腩甬道 */
export function whiteKeyBorardWhiteList(data?: DaDuNanTongQianCaoYongDaoWhiteListReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListDaDuNanXinXiWhiteResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListDaDuNanXinXiWhiteResp['data']>> {
  return usePost<ApiResponseListDaDuNanXinXiWhiteResp>(`/api/white/keyBorardWhiteList`, data, useFetchOptions)
}

/** 获取子大肚腩甬道+丐帮架构imgrouid */
export function whiteList(data?: DaDuNanYongDaoWhiteListReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListDaDuNanXinXiWhiteResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListDaDuNanXinXiWhiteResp['data']>> {
  return usePost<ApiResponseListDaDuNanXinXiWhiteResp>(`/api/white/list`, data, useFetchOptions)
}
