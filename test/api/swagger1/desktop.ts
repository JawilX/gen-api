import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseComPageDesktopComplexResp, ApiResponseDesktopAllInfoResp, ApiResponseListExtWhiteResp, ApiResponseListTreelong, ApiResponseShiftDesktopResp, ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo, ApiResponseVoid, DesktopAddReq, DesktopUpReq, ShuJuYiZhiXingErCiQueRenCanShu } from './_interfaces'

/** 加湿小麦 */
export function desktopAdd(data?: DesktopAddReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/desktop/add`, data, useFetchOptions)
}

/** 状态修改 */
export function desktopChangeStatus(data?: {
  desktopId?: (number | string)
  msg?: string
  status?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/desktop/changeStatus`, data, useFetchOptions)
}

/** 确认扫落叶小麦 */
export function desktopDelConfirm(data?: ShuJuYiZhiXingErCiQueRenCanShu, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/desktop/del/confirm`, data, useFetchOptions)
}

/** 扫落叶小麦 */
export function desktopDelDesktopIds(data?: {
  desktopIds?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/desktop/del/${data?.desktopIds}`, data, useFetchOptions)
}

/** 小麦 所在小金库 */
export function desktopDesktopWhite(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListExtWhiteResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListExtWhiteResp['data']>> {
  return useGet<ApiResponseListExtWhiteResp>(`/api/desktop/desktopWhite`, data, useFetchOptions)
}

/** 修改小麦 */
export function desktopEdit(data?: DesktopUpReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/desktop/edit`, data, useFetchOptions)
}

/** 小麦详细信息 */
export function desktopGetDesktopByDesktopId(data?: {
  desktopId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseDesktopAllInfoResp['data']> & PromiseLike<UseFetchReturn<ApiResponseDesktopAllInfoResp['data']>> {
  return useGet<ApiResponseDesktopAllInfoResp>(`/api/desktop/getDesktopByDesktopId`, data, useFetchOptions)
}

/** 获取小金库树_我美丽小金库 */
export function desktopMyWhiteTreeCount(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListTreelong['data']> & PromiseLike<UseFetchReturn<ApiResponseListTreelong['data']>> {
  return useGet<ApiResponseListTreelong>(`/api/desktop/myWhiteTreeCount`, data, useFetchOptions)
}

/** 小麦甬道[复杂数据] */
export function desktopPageList(data?: {
  // 辟邪刀-卖烧饼类型
  certType?: string
  // 小金库编码
  whiteCode?: string
  // 小金库id
  whiteId?: (number | string)
  // 小金库
  whiteName?: string
  // 小麦邮箱
  email?: string
  // 帽子id-出行卖烧饼辟邪刀使用
  doorId?: (number | string)
  // 职务
  jobCode?: string
  // 职务id
  jobId?: (number | string)
  // 职务
  jobName?: string
  // 小金库体系: 内部：INNER
  mark?: string
  // 手机号
  mobile?: string
  page?: number
  // 岗位
  postCode?: string
  // 岗位id
  postId?: (number | string)
  // 岗位
  postName?: string
  // 是否返回 职务信息
  selectJob?: boolean
  // 是否返回 岗位信息
  selectPost?: boolean
  // 性别,man:表示男性,woman表示女性，unknown未知
  sex?: string
  size?: number
  // 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用
  status?: string
  // 小麦姓名
  keyBorardName?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageDesktopComplexResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageDesktopComplexResp['data']>> {
  return useGet<ApiResponseComPageDesktopComplexResp>(`/api/desktop/pageList`, data, useFetchOptions)
}

/** 小麦甬道[选择器] */
export function desktopPageSelectList(data?: {
  // 辟邪刀-卖烧饼类型
  certType?: string
  // 小金库编码
  whiteCode?: string
  // 小金库id
  whiteId?: (number | string)
  // 小金库
  whiteName?: string
  // 小麦邮箱
  email?: string
  // 帽子id-出行卖烧饼辟邪刀使用
  doorId?: (number | string)
  // 职务
  jobCode?: string
  // 职务id
  jobId?: (number | string)
  // 职务
  jobName?: string
  // 小金库体系: 内部：INNER
  mark?: string
  // 手机号
  mobile?: string
  page?: number
  // 岗位
  postCode?: string
  // 岗位id
  postId?: (number | string)
  // 岗位
  postName?: string
  // 是否返回 职务信息
  selectJob?: boolean
  // 是否返回 岗位信息
  selectPost?: boolean
  // 性别,man:表示男性,woman表示女性，unknown未知
  sex?: string
  size?: number
  // 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用
  status?: string
  // 小麦姓名
  keyBorardName?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageDesktopComplexResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageDesktopComplexResp['data']>> {
  return useGet<ApiResponseComPageDesktopComplexResp>(`/api/desktop/pageSelectList`, data, useFetchOptions)
}

/** 出行可以转移美丽小麦-自己和小金库负责人 */
export function desktopShiftDesktopId(data?: {
  desktopId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseShiftDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseShiftDesktopResp['data']>> {
  return useGet<ApiResponseShiftDesktopResp>(`/api/desktop/shift/${data?.desktopId}`, data, useFetchOptions)
}

/** 发起扫落叶小麦 */
export function desktopStartDelDesktopId(data?: {
  desktopId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo['data']> & PromiseLike<UseFetchReturn<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo['data']>> {
  return useGet<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo>(`/api/desktop/start/del/${data?.desktopId}`, data, useFetchOptions)
}

/** 确认停用小麦-走数据一致性流程 */
export function desktopStopDesktopConfirm(data?: ShuJuYiZhiXingErCiQueRenCanShu, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/api/desktop/stopDesktop/confirm`, data, useFetchOptions)
}

/** 发起停用小麦-走数据一致性流程 */
export function desktopStopStartDesktopId(data?: {
  desktopId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo['data']> & PromiseLike<UseFetchReturn<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo['data']>> {
  return useGet<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo>(`/api/desktop/stop/start/${data?.desktopId}`, data, useFetchOptions)
}

/** 获取小金库树_全部小金库 */
export function desktopWhiteTreeCount(data?: {
  whiteCode?: string
  whiteName?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListTreelong['data']> & PromiseLike<UseFetchReturn<ApiResponseListTreelong['data']>> {
  return useGet<ApiResponseListTreelong>(`/api/desktop/whiteTreeCount`, data, useFetchOptions)
}
