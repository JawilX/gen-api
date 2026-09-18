// 由 @jawilx/gen-api 生成，请勿手动修改
import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseobject, HappyPlanAddCustomerReq } from './_interfaces'

/** 这个接口的出参是个 error model, 在 interface 里找不到, 得处理成空字符串 */
export function happyPlanAddCustomer(data?: HappyPlanAddCustomerReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseobject['data']> & PromiseLike<UseFetchReturn<ApiResponseobject['data']>> {
  return useGet<ApiResponseobject>(`/api/happyPlan/addCustomer`, data, useFetchOptions)
}
