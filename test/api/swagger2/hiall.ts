import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseComPageContactResp, ApiResponseobject, ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing, ApiResponseXiaoDaoXiaoXi, ChuangJianXiaoDaoXiaoXi, ContactReq, QingKongXiaoXiJiLu, XiaoDaoXiaoXiYongDao } from './_interfaces'

/** 清除小道消息[上帝减去对应聪明未读消息总量] */
export function hiallClearHiall(data?: QingKongXiaoXiJiLu, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseobject['data']> & PromiseLike<UseFetchReturn<ApiResponseobject['data']>> {
  return usePost<ApiResponseobject>(`/api/hiall/clearHiall`, data, useFetchOptions)
}

/** 创建小道消息/发起瓜子天/进入鸟窝瓜子 */
export function hiallCreate(data?: ChuangJianXiaoDaoXiaoXi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseXiaoDaoXiaoXi['data']> & PromiseLike<UseFetchReturn<ApiResponseXiaoDaoXiaoXi['data']>> {
  return usePost<ApiResponseXiaoDaoXiaoXi>(`/api/hiall/create`, data, useFetchOptions)
}

/** 常用联系人 */
export function hiallOftenContact(data?: ContactReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageContactResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageContactResp['data']>> {
  return usePost<ApiResponseComPageContactResp>(`/api/hiall/oftenContact`, data, useFetchOptions)
}

/** 小道消息甬道 */
export function hiallPageList(data?: XiaoDaoXiaoXiYongDao, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing['data']>> {
  return usePost<ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing>(`/api/hiall/pageList`, data, useFetchOptions)
}

/** 最近联系人 */
export function hiallRecentContact(data?: ContactReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageContactResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageContactResp['data']>> {
  return usePost<ApiResponseComPageContactResp>(`/api/hiall/recentContact`, data, useFetchOptions)
}

/** 小道消息甬道 */
export function hiallUnreadList(data?: XiaoDaoXiaoXiYongDao, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing['data']>> {
  return usePost<ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing>(`/api/hiall/unreadList`, data, useFetchOptions)
}
