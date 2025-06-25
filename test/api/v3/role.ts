import type { UseFetchOptions } from '@vueuse/core'
import type { AddRoleReqM, DelModel, EmptyReqM, EnableOrDisableReqM, ModifyRoleReqM, ObjectResponseModel, SelectRoleListRespMListResponseModel, StringResponseModel } from './_interfaces'

/** 添加角色 (Auth) */
export function roleAddOne(data?: AddRoleReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<StringResponseModel['data']> & PromiseLike<UseFetchReturn<StringResponseModel['data']>> {
  return usePost<StringResponseModel>(`/api/Role/AddOne`, data, useFetchOptions)
}

/** 删除角色 (Auth) */
export function roleDeleteOne(data?: DelModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return useDelete<ObjectResponseModel>(`/api/Role/DeleteOne`, data, useFetchOptions)
}

/** 启用，禁用角色 (Auth) */
export function roleEnableOrDisableRole(data?: EnableOrDisableReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/Role/EnableOrDisableRole`, data, useFetchOptions)
}

/** 查询角色 (Auth) */
export function roleGetList(data?: EmptyReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<SelectRoleListRespMListResponseModel['data']> & PromiseLike<UseFetchReturn<SelectRoleListRespMListResponseModel['data']>> {
  return usePost<SelectRoleListRespMListResponseModel>(`/api/Role/GetList`, data, useFetchOptions)
}

/** 修改角色 (Auth) */
export function roleModifyOne(data?: ModifyRoleReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/Role/ModifyOne`, data, useFetchOptions)
}
