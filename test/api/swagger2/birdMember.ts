import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseboolean, ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp, ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp, ApiResponseMemberBirdStatusResp, ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp, BirdSetNoticeAndTopReq, NiaoWoChengYuanFenYeBirdMemberPageReq, NiaoWoChengYuanJiaShiBirdMemberSaveReq, NiaoWoChengYuanSaoXueBirdMemberDelReq, NiaoWoChengYuanYongDaoChuXingRuCan, NiaoWoXinXiBirdDetailReq, XiuGaiBeiZhuModifyRemarkBirdReq } from './_interfaces'

/** 本鸟窝状态 */
export function birdMemberBirdStatus(data?: NiaoWoXinXiBirdDetailReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseMemberBirdStatusResp['data']> & PromiseLike<UseFetchReturn<ApiResponseMemberBirdStatusResp['data']>> {
  return usePost<ApiResponseMemberBirdStatusResp>(`/api/birdMember/birdStatus`, data, useFetchOptions)
}

/** 管理员扫雪鸟窝成员 */
export function birdMemberDelete(data?: NiaoWoChengYuanSaoXueBirdMemberDelReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/birdMember/delete`, data, useFetchOptions)
}

/** 扫雪鸟窝管理员 */
export function birdMemberDeleteAdmin(data?: NiaoWoChengYuanSaoXueBirdMemberDelReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/birdMember/deleteAdmin`, data, useFetchOptions)
}

/** 我在本鸟窝信息详情 */
export function birdMemberDetail(data?: NiaoWoXinXiBirdDetailReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp['data']> & PromiseLike<UseFetchReturn<ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp['data']>> {
  return usePost<ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp>(`/api/birdMember/detail`, data, useFetchOptions)
}

/** 是否是鸟窝成员 */
export function birdMemberExistInBird(data?: NiaoWoXinXiBirdDetailReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/birdMember/existInBird`, data, useFetchOptions)
}

/** 退出鸟窝瓜子 */
export function birdMemberLeaveBird(data?: NiaoWoChengYuanSaoXueBirdMemberDelReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/birdMember/leaveBird`, data, useFetchOptions)
}

/** 出行成员甬道 */
export function birdMemberList(data?: NiaoWoChengYuanYongDaoChuXingRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp['data']>> {
  return usePost<ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp>(`/api/birdMember/list`, data, useFetchOptions)
}

/** 鸟窝管理员甬道(含鸟窝主) */
export function birdMemberListAdmin(data?: {
  imBirdId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp['data']>> {
  return useGet<ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp>(`/api/birdMember/listAdmin`, data, useFetchOptions)
}

/** 修改鸟窝成员在本鸟窝备注 */
export function birdMemberModifyRemark(data?: XiuGaiBeiZhuModifyRemarkBirdReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/birdMember/modifyRemark`, data, useFetchOptions)
}

/** 根据birdId分页出行成员甬道 */
export function birdMemberPageList(data?: NiaoWoChengYuanFenYeBirdMemberPageReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp['data']>> {
  return usePost<ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp>(`/api/birdMember/pageList`, data, useFetchOptions)
}

/** 添加鸟窝成员 */
export function birdMemberSave(data?: NiaoWoChengYuanJiaShiBirdMemberSaveReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/birdMember/save`, data, useFetchOptions)
}

/** 添加鸟窝管理员 */
export function birdMemberSaveAdmin(data?: NiaoWoChengYuanJiaShiBirdMemberSaveReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/birdMember/saveAdmin`, data, useFetchOptions)
}

/** 是否通知和免打扰 */
export function birdMemberSetNoticeAndTop(data?: BirdSetNoticeAndTopReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/birdMember/setNoticeAndTop`, data, useFetchOptions)
}
