import type { UseFetchOptions } from '@vueuse/core'
import type { AddPathologyLibReqM, AddPathologyLibTypeModel, DelModel, EmptyReqM, ModifyPathologyLibModel, ModifyPathologyLibTypeModel, ModifyPathologyLibTypeModelListResponseModel, ObjectResponseModel, PathologyLibListReqM, PathologyLibListRespMListResponseModel, StringResponseModel, TwoLevelPathologyLibRespMListResponseModel } from './_interfaces'

/** 添加功法库分类（一级心法库新增） (Auth) */
export function pathologyLibAddOne(data?: AddPathologyLibTypeModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<StringResponseModel['data']> & PromiseLike<UseFetchReturn<StringResponseModel['data']>> {
  return usePost<StringResponseModel>(`/api/PathologyLib/AddOne`, data, useFetchOptions)
}

/** 2级心法库新增 (Auth) */
export function pathologyLibAddTwoLevelPathologyLib(data?: AddPathologyLibReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<StringResponseModel['data']> & PromiseLike<UseFetchReturn<StringResponseModel['data']>> {
  return usePost<StringResponseModel>(`/api/PathologyLib/AddTwoLevelPathologyLib`, data, useFetchOptions)
}

/** 删除心法库一级分类 (Auth) */
export function pathologyLibDeleteOne(data?: DelModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return useDelete<ObjectResponseModel>(`/api/PathologyLib/DeleteOne`, data, useFetchOptions)
}

/** 删除2级别心法库 (Auth) */
export function pathologyLibDeleteTwoLevelPathologyLib(data?: DelModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return useDelete<ObjectResponseModel>(`/api/PathologyLib/DeleteTwoLevelPathologyLib`, data, useFetchOptions)
}

/** 查询所有一级心法库列表 (Auth) */
export function pathologyLibGetAllPathologyLibTypeList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ModifyPathologyLibTypeModelListResponseModel['data']> & PromiseLike<UseFetchReturn<ModifyPathologyLibTypeModelListResponseModel['data']>> {
  return usePost<ModifyPathologyLibTypeModelListResponseModel>(`/api/PathologyLib/GetAllPathologyLibTypeList`, data, useFetchOptions)
}

/** 查询2级心法库列表 (Auth) */
export function pathologyLibGetTwoLevelPathologyLibList(data?: PathologyLibListReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<PathologyLibListRespMListResponseModel['data']> & PromiseLike<UseFetchReturn<PathologyLibListRespMListResponseModel['data']>> {
  return usePost<PathologyLibListRespMListResponseModel>(`/api/PathologyLib/GetTwoLevelPathologyLibList`, data, useFetchOptions)
}

/** 获取二级功法库列表树( 新增收费项目界面使用，所有需要全乎的二级功法库树的接口都是这个) (Auth) */
export function pathologyLibGetTwoLevelPathologyLibTree(data?: EmptyReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<TwoLevelPathologyLibRespMListResponseModel['data']> & PromiseLike<UseFetchReturn<TwoLevelPathologyLibRespMListResponseModel['data']>> {
  return usePost<TwoLevelPathologyLibRespMListResponseModel>(`/api/PathologyLib/GetTwoLevelPathologyLibTree`, data, useFetchOptions)
}

/** 修改一级心法库 (Auth) */
export function pathologyLibModifyOne(data?: ModifyPathologyLibTypeModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/PathologyLib/ModifyOne`, data, useFetchOptions)
}

/** 修改2级心法库 (Auth) */
export function pathologyLibModifyTwoLevelPathologyLib(data?: ModifyPathologyLibModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/PathologyLib/ModifyTwoLevelPathologyLib`, data, useFetchOptions)
}
