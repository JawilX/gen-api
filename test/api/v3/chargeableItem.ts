import type { UseFetchOptions } from '@vueuse/core'
import type { AddChargeItemReqM, DeleteChargeableItemReqM, ModifyChargeItemReqM, ObjectResponseModel, PageChargeItemRspMPagedRespondModel, SelectChargeItemReqMPagedRequestModel, StringResponseModel } from './_interfaces'

/** 添加收费项目 (Auth) */
export function chargeableItemAddOne(data?: AddChargeItemReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<StringResponseModel['data']> & PromiseLike<UseFetchReturn<StringResponseModel['data']>> {
  return usePost<StringResponseModel>(`/api/ChargeableItem/AddOne`, data, useFetchOptions)
}

/** 删除收费项目 (Auth) */
export function chargeableItemDeleteOne(data?: DeleteChargeableItemReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return useDelete<ObjectResponseModel>(`/api/ChargeableItem/DeleteOne`, data, useFetchOptions)
}

/** 按照条件分页查询收费项目 (Auth) */
export function chargeableItemGetPage(data?: SelectChargeItemReqMPagedRequestModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<PageChargeItemRspMPagedRespondModel['data']> & PromiseLike<UseFetchReturn<PageChargeItemRspMPagedRespondModel['data']>> {
  return usePost<PageChargeItemRspMPagedRespondModel>(`/api/ChargeableItem/GetPage`, data, useFetchOptions)
}

/** 修改收费项目 (Auth) */
export function chargeableItemModifyOne(data?: ModifyChargeItemReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/ChargeableItem/ModifyOne`, data, useFetchOptions)
}
