import type { UseFetchOptions } from '@vueuse/core'
import type { HappyPlanAddCustomerReq } from './_interfaces'

/** 这个接口的出参是个 error model, 在 interface 里找不到, 得处理成空字符串 */
export function happyPlanAddCustomer(data?: HappyPlanAddCustomerReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<any['data']> & PromiseLike<UseFetchReturn<any['data']>> {
  return useGet<any>(`/api/happyPlan/addCustomer`, data, useFetchOptions)
}
