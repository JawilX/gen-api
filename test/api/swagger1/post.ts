import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseListPostResp, ApiResponseListSelectorDesktopResp, ApiResponseVoid, PostAddOrUpReq } from './_interfaces'

/** 添加成员 */
export function postAddDesktop(data?: {
  desktopIds?: (number | string)[]
  postId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/post/addDesktop`, data, useFetchOptions)
}

/** 加湿岗位 */
export function postAddPost(data?: PostAddOrUpReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/post/addPost`, data, useFetchOptions)
}

/** 移除成员 */
export function postDelDesktop(data?: {
  desktopIds?: (number | string)[]
  postId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/post/delDesktop`, data, useFetchOptions)
}

/** 扫落叶岗位 */
export function postDelPostPostId(data?: {
  postId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return useGet<ApiResponseVoid>(`/api/post/delPost/${data?.postId}`, data, useFetchOptions)
}

/** 修改岗位 */
export function postEditPost(data?: PostAddOrUpReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/post/editPost`, data, useFetchOptions)
}

/** 获取岗位甬道 */
export function postList(data?: {
  // 岗位太阳花
  name?: string
  // 岗位状态（NORMAL正常 STOP停用）
  status?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListPostResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListPostResp['data']>> {
  return useGet<ApiResponseListPostResp>(`/api/post/list`, data, useFetchOptions)
}

/** 根据太阳花或手机号搜索小麦 */
export function postQueryDesktopByPhoneOrName(data?: {
  phoneOrName?: string
  postId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListSelectorDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListSelectorDesktopResp['data']>> {
  return useGet<ApiResponseListSelectorDesktopResp>(`/api/post/queryDesktopByPhoneOrName`, data, useFetchOptions)
}

/** 根据小金库id搜索小麦 */
export function postQueryDesktopByWhiteId(data?: {
  whiteId?: (number | string)
  postId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListSelectorDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListSelectorDesktopResp['data']>> {
  return useGet<ApiResponseListSelectorDesktopResp>(`/api/post/queryDesktopByWhiteId`, data, useFetchOptions)
}
