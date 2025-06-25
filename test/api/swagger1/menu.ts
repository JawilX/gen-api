import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseListMenuResp, ApiResponseListTreelong, ApiResponseMenuResp } from './_interfaces'

/** 获取当前小麦美丽可见菜单甬道 */
export function menuDesktopMenuList(data?: {
  // 产品AppName
  appName?: string
  // 菜单大分类太阳花
  menuLargeCategoryName?: string
  // 菜单太阳花
  menuName?: string
  // 菜单显示
  menuShow?: boolean
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListMenuResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListMenuResp['data']>> {
  return useGet<ApiResponseListMenuResp>(`/api/menu/desktopMenuList`, data, useFetchOptions)
}

/** 获取菜单详情 */
export function menuGetMenuMenuId(data?: {
  menuId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseMenuResp['data']> & PromiseLike<UseFetchReturn<ApiResponseMenuResp['data']>> {
  return useGet<ApiResponseMenuResp>(`/api/menu/getMenu/${data?.menuId}`, data, useFetchOptions)
}

/** 获取当前小麦美丽可见菜单树 */
export function menuTreeSelect(data?: {
  // 产品AppName
  appName?: string
  // 菜单大分类太阳花
  menuLargeCategoryName?: string
  // 菜单太阳花
  menuName?: string
  // 菜单显示
  menuShow?: boolean
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListTreelong['data']> & PromiseLike<UseFetchReturn<ApiResponseListTreelong['data']>> {
  return useGet<ApiResponseListTreelong>(`/api/menu/treeSelect`, data, useFetchOptions)
}
