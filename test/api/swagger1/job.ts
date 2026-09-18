// 由 @jawilx/gen-api 生成，请勿手动修改
import type { UseFetchOptions } from '@vueuse/core'
import type { AddOrUpdateJobReq, ApiResponseboolean, ApiResponseListSelectorDesktopResp, ApiResponseListTreelong, DesktopSelectorReq, JobAddDesktopReq, QueryDesktopByPhoneOrNameReq, QueryJobReq, RemoveDesktopReq } from './_interfaces'

/** 添加成员 */
export function jobAddDesktop(data?: JobAddDesktopReq[], useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/job/addDesktop`, data, useFetchOptions)
}

/** 添加职务 */
export function jobAddJob(data?: AddOrUpdateJobReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/job/addJob`, data, useFetchOptions)
}

/** 扫落叶职务 */
export function jobDelJob(data?: {
  jobId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/job/delJob`, data, useFetchOptions)
}

/** 根据小金库id搜索小麦 */
export function jobDesktopSelector(data?: DesktopSelectorReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListSelectorDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListSelectorDesktopResp['data']>> {
  return usePost<ApiResponseListSelectorDesktopResp>(`/api/job/desktopSelector`, data, useFetchOptions)
}

/** 根据太阳花或手机号搜索小麦 */
export function jobQueryDesktopByPhoneOrName(data?: QueryDesktopByPhoneOrNameReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListSelectorDesktopResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListSelectorDesktopResp['data']>> {
  return usePost<ApiResponseListSelectorDesktopResp>(`/api/job/queryDesktopByPhoneOrName`, data, useFetchOptions)
}

/** 获取职务甬道 */
export function jobQueryTree(data?: QueryJobReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListTreelong['data']> & PromiseLike<UseFetchReturn<ApiResponseListTreelong['data']>> {
  return usePost<ApiResponseListTreelong>(`/api/job/queryTree`, data, useFetchOptions)
}

/** 移除成员 */
export function jobRemoveDesktop(data?: RemoveDesktopReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/job/removeDesktop`, data, useFetchOptions)
}

/** 修改职务 */
export function jobUpdateJob(data?: AddOrUpdateJobReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/job/updateJob`, data, useFetchOptions)
}
