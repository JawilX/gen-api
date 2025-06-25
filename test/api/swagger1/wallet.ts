import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseboolean, ApiResponseQueryWalletBalanceResp } from './_interfaces'

/** 出行余额 */
export function walletBalance(data?: {
  doorID?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseQueryWalletBalanceResp['data']> & PromiseLike<UseFetchReturn<ApiResponseQueryWalletBalanceResp['data']>> {
  return useGet<ApiResponseQueryWalletBalanceResp>(`/api/wallet/balance`, data, useFetchOptions)
}

/** 是否开通 */
export function walletJudgeStatus(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/wallet/judgeStatus`, data, useFetchOptions)
}
