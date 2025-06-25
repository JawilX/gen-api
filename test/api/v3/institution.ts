import type { UseFetchOptions } from '@vueuse/core'
import type { AddInstitutionReqM, DelModel, EmptyReqM, ModifyUpInstitutionReqM, ObjectResponseModel, SelectInstitutionRespMListResponseModel, StringResponseModel } from './_interfaces'

/** 添加机构 (Auth) */
export function institutionAddOne(data?: AddInstitutionReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<StringResponseModel['data']> & PromiseLike<UseFetchReturn<StringResponseModel['data']>> {
  return usePost<StringResponseModel>(`/api/Institution/AddOne`, data, useFetchOptions)
}

/** 删除机构 (Auth) */
export function institutionDeleteOne(data?: DelModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return useDelete<ObjectResponseModel>(`/api/Institution/DeleteOne`, data, useFetchOptions)
}

/** 查询机构列表 */
export function institutionGetList(data?: EmptyReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<SelectInstitutionRespMListResponseModel['data']> & PromiseLike<UseFetchReturn<SelectInstitutionRespMListResponseModel['data']>> {
  return usePost<SelectInstitutionRespMListResponseModel>(`/api/Institution/GetList`, data, useFetchOptions)
}

/** 修改机构 (Auth) */
export function institutionModifyOne(data?: ModifyUpInstitutionReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/Institution/ModifyOne`, data, useFetchOptions)
}
