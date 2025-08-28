import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo } from './_interfaces'

/** 根据流水号出行结果 */
export function dataSyncCheckResult(data?: {
  // 流水号
  serialNumber?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo['data']> & PromiseLike<UseFetchReturn<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo['data']>> {
  return useGet<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo>(`/api/dataSync/checkResult`, data, useFetchOptions)
}
