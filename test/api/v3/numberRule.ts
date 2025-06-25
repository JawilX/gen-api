import type { UseFetchOptions } from '@vueuse/core'
import type { AddPathologyNoRuleReqM, DelPathologyNoRuleReqM, EmptyReqM, EmptyReqMPagedRequestModel, IdNameRespMListResponseModel, ModifyPathologyNoRuleReqM, ObjectResponseModel, PagePathologyNoRuleRspMPagedRespondModel, StringResponseModel } from './_interfaces'

/** 添加编号规则配置 (Auth) */
export function numberRuleAddOne(data?: AddPathologyNoRuleReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<StringResponseModel['data']> & PromiseLike<UseFetchReturn<StringResponseModel['data']>> {
  return usePost<StringResponseModel>(`/api/NumberRule/AddOne`, data, useFetchOptions)
}

/** 删除编号规则配置 (Auth) */
export function numberRuleDeleteOne(data?: DelPathologyNoRuleReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return useDelete<ObjectResponseModel>(`/api/NumberRule/DeleteOne`, data, useFetchOptions)
}

/** 查询编号规则配置列表 (Auth) */
export function numberRuleGetList(data?: EmptyReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<IdNameRespMListResponseModel['data']> & PromiseLike<UseFetchReturn<IdNameRespMListResponseModel['data']>> {
  return usePost<IdNameRespMListResponseModel>(`/api/NumberRule/GetList`, data, useFetchOptions)
}

/** 按照条件分页查询编号规则配置 (Auth) */
export function numberRuleGetPage(data?: EmptyReqMPagedRequestModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<PagePathologyNoRuleRspMPagedRespondModel['data']> & PromiseLike<UseFetchReturn<PagePathologyNoRuleRspMPagedRespondModel['data']>> {
  return usePost<PagePathologyNoRuleRspMPagedRespondModel>(`/api/NumberRule/GetPage`, data, useFetchOptions)
}

/** 修改编号规则配置 (Auth) */
export function numberRuleModifyOne(data?: ModifyPathologyNoRuleReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/NumberRule/ModifyOne`, data, useFetchOptions)
}
