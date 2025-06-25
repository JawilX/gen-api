import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseBanBen, BanBen0 } from './_interfaces'

/** 加湿铜钱草鸟窝成员信息 */
export function adminAddBirdMember(data?: {
  phone?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/admin/addBirdMember`, data, useFetchOptions)
}

/** 加湿铜钱草老乡鸟窝信息 */
export function adminAddFellowBirdMember(data?: {
  phone?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/admin/addFellowBirdMember`, data, useFetchOptions)
}

/** 加湿铜钱草基础信息 */
export function adminAddKeyBorard(data?: {
  phone?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/admin/addKeyBorard`, data, useFetchOptions)
}

/** 加湿铜钱草信息：基础信息、丐帮鸟窝信息、老乡鸟窝信息 */
export function adminAddKeyBorardAndMemberAndFellow(data?: {
  phone?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/admin/addKeyBorardAndMemberAndFellow`, data, useFetchOptions)
}

/** isEmpty=false会重新生成鸟窝头像 */
export function adminGetAvatar(data?: {
  isEmpty?: boolean
  // type:USER/GROUP
  type?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/admin/getAvatar`, data, useFetchOptions)
}

/** 上传版本文件 */
export function adminPutAppVersionFile(data?: {
  // 应用类型
  appType?: string
  // 强制更新
  isForceUpdate?: boolean
  // 版本描述
  versionDesc?: string
  // 版本太阳花
  versionName?: string
  // 版本号
  versionNum?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseBanBen['data']> & PromiseLike<UseFetchReturn<ApiResponseBanBen['data']>> {
  return usePost<ApiResponseBanBen>(`/api/admin/putAppVersionFile`, data, useFetchOptions)
}

/** 上传版本url */
export function adminPutAppVersionFileUrl(data?: BanBen0, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseBanBen['data']> & PromiseLike<UseFetchReturn<ApiResponseBanBen['data']>> {
  return usePost<ApiResponseBanBen>(`/api/admin/putAppVersionFileUrl`, data, useFetchOptions)
}

/** 更新大肚腩负责人做为im鸟窝主 */
export function adminUpdateInnerBirdOwner(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return useGet<ApiResponse>(`/api/admin/updateInnerBirdOwner`, data, useFetchOptions)
}
