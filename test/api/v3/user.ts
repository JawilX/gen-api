import type { UseFetchOptions } from '@vueuse/core'
import type { AddUserReqM, DelModel, EmptyReqM, EnableOrDisableReqM, LoginReqM, LoginRespMResponseModel, ModifyUserReqM, ObjectResponseModel, PreLoginRespMResponseModel, StringResponseModel, UserListReqM, UserListRespMListResponseModel } from './_interfaces'

/** 添加用户 (Auth) */
export function userAddOne(data?: AddUserReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<StringResponseModel['data']> & PromiseLike<UseFetchReturn<StringResponseModel['data']>> {
  return usePost<StringResponseModel>(`/api/User/AddOne`, data, useFetchOptions)
}

/** 删除用户 (Auth) */
export function userDeleteOne(data?: DelModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return useDelete<ObjectResponseModel>(`/api/User/DeleteOne`, data, useFetchOptions)
}

/** 启用，禁用用户 (Auth) */
export function userEnableOrDisableUser(data?: EnableOrDisableReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/User/EnableOrDisableUser`, data, useFetchOptions)
}

/** 查询用户列表 (Auth) */
export function userGetUserList(data?: UserListReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<UserListRespMListResponseModel['data']> & PromiseLike<UseFetchReturn<UserListRespMListResponseModel['data']>> {
  return usePost<UserListRespMListResponseModel>(`/api/User/GetUserList`, data, useFetchOptions)
}

/** 用户名和密码登录接口 */
export function userLoginWithPassword(data?: LoginReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<LoginRespMResponseModel['data']> & PromiseLike<UseFetchReturn<LoginRespMResponseModel['data']>> {
  return usePut<LoginRespMResponseModel>(`/api/User/LoginWithPassword`, data, useFetchOptions)
}

/** 修改用户 (Auth) */
export function userModifyOne(data?: ModifyUserReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/User/ModifyOne`, data, useFetchOptions)
}

/** 预登录接口， 在登录接口前，返回前端需要的参数值 */
export function userPreLogin(data?: EmptyReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<PreLoginRespMResponseModel['data']> & PromiseLike<UseFetchReturn<PreLoginRespMResponseModel['data']>> {
  return usePost<PreLoginRespMResponseModel>(`/api/User/PreLogin`, data, useFetchOptions)
}
