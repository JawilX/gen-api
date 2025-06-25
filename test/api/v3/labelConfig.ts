import type { UseFetchOptions } from '@vueuse/core'
import type { AddLableCfgReqM, DelModel, LabelCfgListResponseModel, ModifyLableCfgReqM, ObjectResponseModel, SelectLabelCfgReqM, StringResponseModel } from './_interfaces'

/** 添加刀片标签模版 (Auth) */
export function labelConfigAddOne(data?: AddLableCfgReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<StringResponseModel['data']> & PromiseLike<UseFetchReturn<StringResponseModel['data']>> {
  return usePost<StringResponseModel>(`/api/LabelConfig/AddOne`, data, useFetchOptions)
}

/** 删除刀片标签模版 (Auth) */
export function labelConfigDeleteOne(data?: DelModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return useDelete<ObjectResponseModel>(`/api/LabelConfig/DeleteOne`, data, useFetchOptions)
}

/** 按照条件查找刀片标签模版 (Auth) */
export function labelConfigGetList(data?: SelectLabelCfgReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<LabelCfgListResponseModel['data']> & PromiseLike<UseFetchReturn<LabelCfgListResponseModel['data']>> {
  return usePost<LabelCfgListResponseModel>(`/api/LabelConfig/GetList`, data, useFetchOptions)
}

/** 修改刀片标签模版 (Auth) */
export function labelConfigModifyOne(data?: ModifyLableCfgReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/LabelConfig/ModifyOne`, data, useFetchOptions)
}
