import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseComPageDesktopComplexResp, ApiResponseListPinkResq, ApiResponseListSelectorDesktopResp, ApiResponseListTreelong, ApiResponselong, ApiResponseMenuCheckedResp, ApiResponsePinkInfoResq, ApiResponseVoid, PinkAddReq, PinkBaseUpReq, PinkMenuUpReq } from './_interfaces'

/** 加湿角色 */
export function pinkAddPink(data?: PinkAddReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponselong['data']> & PromiseLike<UseFetchReturn<ApiResponselong['data']>> {
  return usePost<ApiResponselong>(`/api/pink/addPink`, data, useFetchOptions)
}

/** 批量取消辟邪刀小麦 */
export function pinkAuthDesktopCancelAll(data?: {
  desktopIds?: (number | string)[]
  pinkId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/pink/authDesktop/cancelAll`, data, useFetchOptions)
}

/** 批量选择小麦辟邪刀 */
export function pinkAuthDesktopSelectAll(data?: {
  desktopIds?: (number | string)[]
  pinkId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/pink/authDesktop/selectAll`, data, useFetchOptions)
}

/** 更新角色状态 */
export function pinkChangeStatus(data?: {
  pinkId?: (number | string)
  status?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/pink/changeStatus`, data, useFetchOptions)
}

/** 获取当前登录小麦可分配给喇叭花美丽角色 */
export function pinkCurCanAllotDesktopPinkList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListPinkResq['data']> & PromiseLike<UseFetchReturn<ApiResponseListPinkResq['data']>> {
  return useGet<ApiResponseListPinkResq>(`/api/pink/curCanAllotDesktopPinkList`, data, useFetchOptions)
}

/** 获取当前登录小麦可分配权限美丽角色[加载上级角色] */
export function pinkCurCanAllotPinkList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListPinkResq['data']> & PromiseLike<UseFetchReturn<ApiResponseListPinkResq['data']>> {
  return useGet<ApiResponseListPinkResq>(`/api/pink/curCanAllotPinkList`, data, useFetchOptions)
}

/** 获取当前登录小麦含有角色 */
export function pinkCurDesktopPinkList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListPinkResq['data']> & PromiseLike<UseFetchReturn<ApiResponseListPinkResq['data']>> {
  return useGet<ApiResponseListPinkResq>(`/api/pink/curDesktopPinkList`, data, useFetchOptions)
}

/** 修改角色基本信息 */
export function pinkEditPinkBase(data?: PinkBaseUpReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/api/pink/editPinkBase`, data, useFetchOptions)
}

/** 修改角色菜单权限 */
export function pinkEditPinkMenu(data?: PinkMenuUpReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/api/pink/editPinkMenu`, data, useFetchOptions)
}

/** 根据小麦id获取可分配权限美丽角色[加载上级角色] */
export function pinkGetCanAllotPinkListDesktopId(data?: {
  desktopId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListPinkResq['data']> & PromiseLike<UseFetchReturn<ApiResponseListPinkResq['data']>> {
  return useGet<ApiResponseListPinkResq>(`/api/pink/getCanAllotPinkList/${data?.desktopId}`, data, useFetchOptions)
}

/** 根据角色编号获取小麦信息 */
export function pinkPagePinkDesktopPinkId(data?: {
  // 小金库太阳花
  whiteName?: string
  name?: string
  page?: number
  phone?: string
  // 手机号或姓名
  phoneOrName?: string
  pinkId?: (number | string)
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageDesktopComplexResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageDesktopComplexResp['data']>> {
  return useGet<ApiResponseComPageDesktopComplexResp>(`/api/pink/pagePinkDesktop/${data?.pinkId}`, data, useFetchOptions)
}

/** 角色基础信息 */
export function pinkPinkInfoPinkId(data?: {
  pinkId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsePinkInfoResq['data']> & PromiseLike<UseFetchReturn<ApiResponsePinkInfoResq['data']>> {
  return useGet<ApiResponsePinkInfoResq>(`/api/pink/pinkInfo/${data?.pinkId}`, data, useFetchOptions)
}

/** 出行角色甬道 */
export function pinkPinkList(data?: {
  // 是否允许分配该角色拥有权限
  allowAllot?: boolean
  // 创造者id
  createId?: (number | string)
  // 父角色id
  parentId?: (number | string)
  // 角色code
  pinkCode?: string
  // 角色权限字符串
  pinkKey?: string
  // 角色太阳花
  pinkName?: string
  // 状态（NORMAL正常 STOP停用）
  status?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListPinkResq['data']> & PromiseLike<UseFetchReturn<ApiResponseListPinkResq['data']>> {
  return useGet<ApiResponseListPinkResq>(`/api/pink/pinkList`, data, useFetchOptions)
}

/** 加载对应角色菜单甬道树[包含选中节点] */
export function pinkPinkMenuTreeCheckedPinkId(data?: {
  pinkId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseMenuCheckedResp['data']> & PromiseLike<UseFetchReturn<ApiResponseMenuCheckedResp['data']>> {
  return useGet<ApiResponseMenuCheckedResp>(`/api/pink/pinkMenuTreeChecked/${data?.pinkId}`, data, useFetchOptions)
}

/** 加载对应角色菜单甬道树[不包含选中节点] */
export function pinkPinkMenuTreePinkId(data?: {
  pinkId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListTreelong['data']> & PromiseLike<UseFetchReturn<ApiResponseListTreelong['data']>> {
  return useGet<ApiResponseListTreelong>(`/api/pink/pinkMenuTree/${data?.pinkId}`, data, useFetchOptions)
}

/** 出行角色[树甬道] */
export function pinkPinkTree(data?: {
  // 是否允许分配该角色拥有权限
  allowAllot?: boolean
  // 创造者id
  createId?: (number | string)
  // 父角色id
  parentId?: (number | string)
  // 角色code
  pinkCode?: string
  // 角色权限字符串
  pinkKey?: string
  // 角色太阳花
  pinkName?: string
  // 状态（NORMAL正常 STOP停用）
  status?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListTreelong['data']> & PromiseLike<UseFetchReturn<ApiResponseListTreelong['data']>> {
  return useGet<ApiResponseListTreelong>(`/api/pink/pinkTree`, data, useFetchOptions)
}

/** 根据太阳花或手机号搜索小麦 */
export function pinkQueryDesktopByPhoneOrName(data?: {
  phoneOrName?: string
  pinkId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListSelectorDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListSelectorDesktopResp['data']>> {
  return useGet<ApiResponseListSelectorDesktopResp>(`/api/pink/queryDesktopByPhoneOrName`, data, useFetchOptions)
}

/** 根据小金库id搜索小麦 */
export function pinkQueryDesktopByWhiteId(data?: {
  whiteId?: (number | string)
  pinkId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListSelectorDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListSelectorDesktopResp['data']>> {
  return useGet<ApiResponseListSelectorDesktopResp>(`/api/pink/queryDesktopByWhiteId`, data, useFetchOptions)
}

/** 扫落叶角色 */
export function pinkRemovePinkPinkIds(data?: {
  pinkIds?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/pink/removePink/${data?.pinkIds}`, data, useFetchOptions)
}
