import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseCurrentAuthResp, ApiResponseDesktopAllInfoResp, ApiResponseDesktopResp } from './_interfaces'

/** 当前登录者美丽喇叭花菜单路由+权限信息 */
export function indexGetCurrentAuth(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseCurrentAuthResp['data']> & PromiseLike<UseFetchReturn<ApiResponseCurrentAuthResp['data']>> {
  return useGet<ApiResponseCurrentAuthResp>(`/api/index/getCurrentAuth`, data, useFetchOptions)
}

/** 当前登录者美丽喇叭花基本信息 */
export function indexGetCurrentDesktop(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseDesktopResp['data']>> {
  return useGet<ApiResponseDesktopResp>(`/api/index/getCurrentDesktop`, data, useFetchOptions)
}

/** 当前登录者美丽喇叭花基本信息+小金库+职务+岗位+角色 */
export function indexGetCurrentDesktopAll(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseDesktopAllInfoResp['data']> & PromiseLike<UseFetchReturn<ApiResponseDesktopAllInfoResp['data']>> {
  return useGet<ApiResponseDesktopAllInfoResp>(`/api/index/getCurrentDesktopAll`, data, useFetchOptions)
}
