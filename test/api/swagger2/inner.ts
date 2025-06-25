import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseboolean, ApiResponseComPageNiaoWoDuiXiangBirdResp, ApiResponseComPageXiaoXiNeiBuXiangYingShiTi, ApiResponseNeiBuMaiShaoBingNiaoWoBaoCunChuCan, ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi, ApiResponsePutFileResp, ApiResponseVoid, BirdFileUploadReq, InnerBirdDissolveReq, InnerBirdMemberBirdListReq, MaiShaoBingXiaoXiTuiSongImXiaoXi, MockJiaRenRuNiaoWoRuCan, NeiBuNiaoWoBaoCunNiaoWoChengYuanRuCan, NeiBuNiaoWoBaoCunRuCan, NeiBuXiaoXiSouSuoQingQiu, UploadFileReq } from './_interfaces'

/** 卖烧饼解散鸟窝 */
export function innerBirdDissolve(data?: InnerBirdDissolveReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/inner/bird/dissolve`, data, useFetchOptions)
}

/** 鸟窝甬道 */
export function innerBirdMemberBirdPageList(data?: InnerBirdMemberBirdListReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageNiaoWoDuiXiangBirdResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageNiaoWoDuiXiangBirdResp['data']>> {
  return usePost<ApiResponseComPageNiaoWoDuiXiangBirdResp>(`/inner/birdMember/birdPageList`, data, useFetchOptions)
}

/** 卖烧饼方鸟窝踢人或主动退鸟窝 */
export function innerBirdMemberRemove(data?: NeiBuNiaoWoBaoCunRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/inner/birdMember/remove`, data, useFetchOptions)
}

/** 卖烧饼加人入鸟窝 */
export function innerBirdMemberSave(data?: NeiBuNiaoWoBaoCunNiaoWoChengYuanRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseNeiBuMaiShaoBingNiaoWoBaoCunChuCan['data']> & PromiseLike<UseFetchReturn<ApiResponseNeiBuMaiShaoBingNiaoWoBaoCunChuCan['data']>> {
  return usePost<ApiResponseNeiBuMaiShaoBingNiaoWoBaoCunChuCan>(`/inner/birdMember/save`, data, useFetchOptions)
}

/** 卖烧饼自动拉鸟窝 */
export function innerBirdSave(data?: NeiBuNiaoWoBaoCunRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseNeiBuMaiShaoBingNiaoWoBaoCunChuCan['data']> & PromiseLike<UseFetchReturn<ApiResponseNeiBuMaiShaoBingNiaoWoBaoCunChuCan['data']>> {
  return usePost<ApiResponseNeiBuMaiShaoBingNiaoWoBaoCunChuCan>(`/inner/bird/save`, data, useFetchOptions)
}

/** 拉校友鸟窝 */
export function innerBirdSaveSchoolMateBird(data?: NeiBuNiaoWoBaoCunRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/inner/bird/saveSchoolMateBird`, data, useFetchOptions)
}

/** 上传鸟窝文件 */
export function innerFileBirdFileSave(data?: BirdFileUploadReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi['data']> & PromiseLike<UseFetchReturn<ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi['data']>> {
  return usePost<ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi>(`/inner/file/birdFile/save`, data, useFetchOptions)
}

/** 生成上传签名url[图片消息 传入type及originalFileName] */
export function innerFileGetUploadUrl(data?: UploadFileReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsePutFileResp['data']> & PromiseLike<UseFetchReturn<ApiResponsePutFileResp['data']>> {
  return usePost<ApiResponsePutFileResp>(`/inner/file/getUploadUrl`, data, useFetchOptions)
}

/** 模拟拉鸟窝后加人入鸟窝 */
export function innerMockMockSaveMember(data?: MockJiaRenRuNiaoWoRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/inner/mock/mockSaveMember`, data, useFetchOptions)
}

/** 分页搜索消息 */
export function innerMsgSearch(data?: NeiBuXiaoXiSouSuoQingQiu, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageXiaoXiNeiBuXiangYingShiTi['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageXiaoXiNeiBuXiangYingShiTi['data']>> {
  return usePost<ApiResponseComPageXiaoXiNeiBuXiangYingShiTi>(`/inner/msg/search`, data, useFetchOptions)
}

/** 卖烧饼推送消息[只能给多个鸟窝，或者多热气球发，不能混合发] */
export function innerMsgSend(data?: MaiShaoBingXiaoXiTuiSongImXiaoXi, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/inner/msg/send`, data, useFetchOptions)
}
