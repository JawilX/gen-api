import type { UseFetchOptions } from '@vueuse/core'
import type { AddDicItemReqM, DelModel, DicItemReqM, DicItemRespMListResponseModel, ModifyDicItemReqM, ObjectResponseModel, StringResponseModel } from './_interfaces'

/** 1、添加某个字典下拉项 2、添加源力配置列表中的某一个条 (Auth) */
export function dicItemAddOne(data?: AddDicItemReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<StringResponseModel['data']> & PromiseLike<UseFetchReturn<StringResponseModel['data']>> {
  return usePost<StringResponseModel>(`/api/DicItem/AddOne`, data, useFetchOptions)
}

/** 1、删除某个字典下拉项 2、删除源力配置列表中的某一个条 (Auth) */
export function dicItemDeleteOne(data?: DelModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return useDelete<ObjectResponseModel>(`/api/DicItem/DeleteOne`, data, useFetchOptions)
}

/** 1、获取字典下拉列表 2、获取源力配置列表 (Auth) */
export function dicItemGetDicItem(data?: DicItemReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<DicItemRespMListResponseModel['data']> & PromiseLike<UseFetchReturn<DicItemRespMListResponseModel['data']>> {
  return usePost<DicItemRespMListResponseModel>(`/api/DicItem/GetDicItem`, data, useFetchOptions)
}

/** 1、修改某个字典下拉项 2、修改源力配置列表中的某一个条 (Auth) */
export function dicItemModifyOne(data?: ModifyDicItemReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/DicItem/ModifyOne`, data, useFetchOptions)
}
