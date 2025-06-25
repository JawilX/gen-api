import type { UseFetchOptions } from '@vueuse/core'
import type { AddButtonReqM, AddOrModifyRoleSelectBtnReqM, AddOrModifyRoleSelectBtnRespMListResponseModel, DelModel, ModifyButtonReqM, ObjectResponseModel, PermissionNodeListResponseModel, PermissionTreeReqM, StringResponseModel } from './_interfaces'

/** 添加button (Auth) */
export function buttonAddOne(data?: AddButtonReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<StringResponseModel['data']> & PromiseLike<UseFetchReturn<StringResponseModel['data']>> {
  return usePost<StringResponseModel>(`/api/Button/AddOne`, data, useFetchOptions)
}

/** 添加或者修改角色时，弹出选择权限的树 (Auth) */
export function buttonAddOrModifyRoleSelectBtnTree(data?: AddOrModifyRoleSelectBtnReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<AddOrModifyRoleSelectBtnRespMListResponseModel['data']> & PromiseLike<UseFetchReturn<AddOrModifyRoleSelectBtnRespMListResponseModel['data']>> {
  return usePost<AddOrModifyRoleSelectBtnRespMListResponseModel>(`/api/Button/AddOrModifyRoleSelectBtnTree`, data, useFetchOptions)
}

/** 删除button (Auth) */
export function buttonDeleteOne(data?: DelModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return useDelete<ObjectResponseModel>(`/api/Button/DeleteOne`, data, useFetchOptions)
}

/** 权限配置，按照名称查询三级级联的权限树 (Auth) */
export function buttonGetPermissionTree(data?: PermissionTreeReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<PermissionNodeListResponseModel['data']> & PromiseLike<UseFetchReturn<PermissionNodeListResponseModel['data']>> {
  return usePost<PermissionNodeListResponseModel>(`/api/Button/GetPermissionTree`, data, useFetchOptions)
}

/** 修改button (Auth) */
export function buttonModifyOne(data?: ModifyButtonReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/Button/ModifyOne`, data, useFetchOptions)
}
