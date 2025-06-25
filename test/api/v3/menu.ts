import type { UseFetchOptions } from '@vueuse/core'
import type { AddMenuReqM, DelModel, EmptyReqM, GetSelectMenuTreeForRoleReqM, MenuNodeForBtnListResponseModel, MenuNodeListResponseModel, ModifyMenuReqM, ObjectResponseModel, SelectMenuReqM, SelectMenuRespMListResponseModel, StringResponseModel, UpdateSortForMenusByMenuIdsReqM } from './_interfaces'

/** 添加菜单 (Auth) */
export function menuAddOne(data?: AddMenuReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<StringResponseModel['data']> & PromiseLike<UseFetchReturn<StringResponseModel['data']>> {
  return usePost<StringResponseModel>(`/api/Menu/AddOne`, data, useFetchOptions)
}

/** 删除菜单 (Auth) */
export function menuDeleteOne(data?: DelModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return useDelete<ObjectResponseModel>(`/api/Menu/DeleteOne`, data, useFetchOptions)
}

/** 1、新建权限（按钮）界面，查询所有二级菜单树 2、菜单管理界面，左侧二级菜单树查询接口 (Auth) */
export function menuGetAllMenuTree(data?: EmptyReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<MenuNodeForBtnListResponseModel['data']> & PromiseLike<UseFetchReturn<MenuNodeForBtnListResponseModel['data']>> {
  return usePost<MenuNodeForBtnListResponseModel>(`/api/Menu/GetAllMenuTree`, data, useFetchOptions)
}

/** 查询菜单 (Auth) */
export function menuGetChildMenuList(data?: SelectMenuReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<SelectMenuRespMListResponseModel['data']> & PromiseLike<UseFetchReturn<SelectMenuRespMListResponseModel['data']>> {
  return usePost<SelectMenuRespMListResponseModel>(`/api/Menu/GetChildMenuList`, data, useFetchOptions)
}

/** 新建角色或者修改角色时，需要弹出供选择的二级菜单树 (Auth) */
export function menuGetSelectMenuTreeForRole(data?: GetSelectMenuTreeForRoleReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<MenuNodeListResponseModel['data']> & PromiseLike<UseFetchReturn<MenuNodeListResponseModel['data']>> {
  return usePost<MenuNodeListResponseModel>(`/api/Menu/GetSelectMenuTreeForRole`, data, useFetchOptions)
}

/** 修改菜单 (Auth) */
export function menuModifyOne(data?: ModifyMenuReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/Menu/ModifyOne`, data, useFetchOptions)
}

/** 同级菜单拖动排序时，调用该接口刷新兄弟菜单的sort值 (Auth) */
export function menuUpdateSortForMenusByMenuIds(data?: UpdateSortForMenusByMenuIdsReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePost<ObjectResponseModel>(`/api/Menu/UpdateSortForMenusByMenuIds`, data, useFetchOptions)
}
