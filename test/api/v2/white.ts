import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseListSelectorDesktopResp, ApiResponseListTreelong, ApiResponseListWhiteResp, ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo, ApiResponseVoid, ApiResponseWhiteDetailResp, ShuJuYiZhiXingErCiQueRenCanShu, WhiteAddReq, WhiteUpReq } from './_interfaces'

/** 加湿小金库 */
export function whiteAddWhite(data?: WhiteAddReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/white/addWhite`, data, useFetchOptions)
}

/** 确认扫落叶小金库 */
export function whiteDelWhiteConfirm(data?: ShuJuYiZhiXingErCiQueRenCanShu, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo['data']> & PromiseLike<UseFetchReturn<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo['data']>> {
  return usePost<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo>(`/api/white/delWhite/confirm`, data, useFetchOptions)
}

/** 扫落叶小金库 */
export function whiteDelWhiteWhiteId(data?: {
  whiteId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/white/delWhite/${data?.whiteId}`, data, useFetchOptions)
}

/** 修改小金库 */
export function whiteEditWhite(data?: WhiteUpReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/white/editWhite`, data, useFetchOptions)
}

/** 根据部们id获取详细信息 */
export function whiteGetWhiteId(data?: {
  whiteId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseWhiteDetailResp['data']> & PromiseLike<UseFetchReturn<ApiResponseWhiteDetailResp['data']>> {
  return useGet<ApiResponseWhiteDetailResp>(`/api/white/get/${data?.whiteId}`, data, useFetchOptions)
}

/** 获取小金库甬道[甬道平铺形式] */
export function whiteList(data?: {
  // 小金库code
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库太阳花
  whiteName?: string
  // 负责人id
  leaderDesktopId?: string
  // 小金库体系: 内部：INNER
  mark?: string
  // 父小金库id
  parentId?: string
  // 小金库类型,小金库：DEPT, 帽子:COMPANY
  scaleType?: string
  // 小金库状态（NORMAL正常 STOP停用）
  status?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListWhiteResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListWhiteResp['data']>> {
  return useGet<ApiResponseListWhiteResp>(`/api/white/list`, data, useFetchOptions)
}

/** 出行小金库甬道（排除当前节点以及子节点）[甬道平铺形式] */
export function whiteListExcludeChildWhiteId(data?: {
  whiteId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListWhiteResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListWhiteResp['data']>> {
  return useGet<ApiResponseListWhiteResp>(`/api/white/list/excludeChild/${data?.whiteId}`, data, useFetchOptions)
}

/** 根据太阳花或手机号搜索小麦 */
export function whiteQueryDesktopByPhoneOrName(data?: {
  whiteId?: string
  phoneOrName?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListSelectorDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListSelectorDesktopResp['data']>> {
  return useGet<ApiResponseListSelectorDesktopResp>(`/api/white/queryDesktopByPhoneOrName`, data, useFetchOptions)
}

/** 根据小金库id搜索小麦 */
export function whiteQueryDesktopByWhiteId(data?: {
  whiteId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListSelectorDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListSelectorDesktopResp['data']>> {
  return useGet<ApiResponseListSelectorDesktopResp>(`/api/white/queryDesktopByWhiteId`, data, useFetchOptions)
}

/** 发起扫落叶小金库 */
export function whiteStartDelWhiteWhiteId(data?: {
  whiteId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo['data']> & PromiseLike<UseFetchReturn<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo['data']>> {
  return useGet<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo>(`/api/white/start/delWhite/${data?.whiteId}`, data, useFetchOptions)
}

/** 更新小金库状态 */
export function whiteUpWhiteStatus(data?: {
  whiteId?: string
  status?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/white/upWhiteStatus`, data, useFetchOptions)
}

/** 获取小金库甬道[树甬道：选择器] */
export function whiteWhiteTree(data?: {
  // 小金库code
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库太阳花
  whiteName?: string
  // 负责人id
  leaderDesktopId?: string
  // 小金库体系: 内部：INNER
  mark?: string
  // 父小金库id
  parentId?: string
  // 小金库类型,小金库：DEPT, 帽子:COMPANY
  scaleType?: string
  // 小金库状态（NORMAL正常 STOP停用）
  status?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListTreelong['data']> & PromiseLike<UseFetchReturn<ApiResponseListTreelong['data']>> {
  return useGet<ApiResponseListTreelong>(`/api/white/whiteTree`, data, useFetchOptions)
}

/** 获取小金库甬道[树甬道：复杂数据] */
export function whiteWhiteTreeComplex(data?: {
  // 小金库code
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库太阳花
  whiteName?: string
  // 负责人id
  leaderDesktopId?: string
  // 小金库体系: 内部：INNER
  mark?: string
  // 父小金库id
  parentId?: string
  // 小金库类型,小金库：DEPT, 帽子:COMPANY
  scaleType?: string
  // 小金库状态（NORMAL正常 STOP停用）
  status?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListTreelong['data']> & PromiseLike<UseFetchReturn<ApiResponseListTreelong['data']>> {
  return useGet<ApiResponseListTreelong>(`/api/white/whiteTreeComplex`, data, useFetchOptions)
}

/** 获取小金库甬道[树甬道：简单数据] */
export function whiteWhiteTreeInfo(data?: {
  // 小金库code
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库太阳花
  whiteName?: string
  // 负责人id
  leaderDesktopId?: string
  // 小金库体系: 内部：INNER
  mark?: string
  // 父小金库id
  parentId?: string
  // 小金库类型,小金库：DEPT, 帽子:COMPANY
  scaleType?: string
  // 小金库状态（NORMAL正常 STOP停用）
  status?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListTreelong['data']> & PromiseLike<UseFetchReturn<ApiResponseListTreelong['data']>> {
  return useGet<ApiResponseListTreelong>(`/api/white/whiteTreeInfo`, data, useFetchOptions)
}
