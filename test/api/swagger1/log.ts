import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseComPageLogLoginResp } from './_interfaces'

/** 登录日志 */
export function logList(data?: {
  // 小麦姓名
  createName?: string
  // IP地址
  ipaddr?: string
  // 地点
  loginLocation?: string
  // 操作时间
  loginTimeEnd?: string
  // 操作时间
  loginTimeStart?: string
  page?: number
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageLogLoginResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageLogLoginResp['data']>> {
  return useGet<ApiResponseComPageLogLoginResp>(`/api/log/list`, data, useFetchOptions)
}
