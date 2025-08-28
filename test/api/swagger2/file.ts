import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponsealiyunSTSJianQuanFanHuiZhi, ApiResponsePutFileResp, ApiResponseQianMingWenJianXiangYing, ApiResponseShangChuanALiYunQianMingXiangYing, ApiResponseWenJianPiLiangBaoCunXiangYingShiTi, ApiResponseYuYinShiBieFanHui, HuoQuALiYunQianMingRuCan, HuoQuBucket, QianMingWenJianShangChuanQingQiuRuCanShiTi, UploadFileReq } from './_interfaces'

/** 阿里云STS鉴权 */
export function fileGetAliyunStsSign(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsealiyunSTSJianQuanFanHuiZhi['data']> & PromiseLike<UseFetchReturn<ApiResponsealiyunSTSJianQuanFanHuiZhi['data']>> {
  return useGet<ApiResponsealiyunSTSJianQuanFanHuiZhi>(`/api/file/getAliyunStsSign`, data, useFetchOptions)
}

/** 获取bucket */
export function fileGetOssConfig(data?: HuoQuBucket, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseShangChuanALiYunQianMingXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseShangChuanALiYunQianMingXiangYing['data']>> {
  return usePost<ApiResponseShangChuanALiYunQianMingXiangYing>(`/api/file/getOssConfig`, data, useFetchOptions)
}

/** 语音转文字 */
export function fileParseVoice(data?: {
  fileId?: (number | string)
  messageId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseYuYinShiBieFanHui['data']> & PromiseLike<UseFetchReturn<ApiResponseYuYinShiBieFanHui['data']>> {
  return useGet<ApiResponseYuYinShiBieFanHui>(`/api/file/parseVoice`, data, useFetchOptions)
}

/** 直接表单提交文件到oss,返回图片访问链接 */
export function filePutOssFile(data?: {
  // 卖烧饼id
  happyId?: (number | string)
  // 文件时长
  fileTime?: (number | string)
  // 图片高度
  height?: number
  // 是否语音文件
  isVoice?: boolean
  // 原始文件名
  originalFileName?: string
  // 文件大小
  realFileSize?: string
  // 铜钱草头像USER_AVATAR 鸟窝头像GROUP_AVATAR 消息文件MSG 卡片文件CARD_MSG 转码文件TRANS_MSG
  type?: string
  // 图片宽度
  width?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsePutFileResp['data']> & PromiseLike<UseFetchReturn<ApiResponsePutFileResp['data']>> {
  return usePost<ApiResponsePutFileResp>(`/api/file/putOssFile`, data, useFetchOptions)
}

/** 文件上传,保存文件 */
export function fileSaveFiles(data?: QianMingWenJianShangChuanQingQiuRuCanShiTi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseWenJianPiLiangBaoCunXiangYingShiTi['data']> & PromiseLike<UseFetchReturn<ApiResponseWenJianPiLiangBaoCunXiangYingShiTi['data']>> {
  return usePost<ApiResponseWenJianPiLiangBaoCunXiangYingShiTi>(`/api/file/saveFiles`, data, useFetchOptions)
}

/** 文件上传,文件路径诛仙剑 */
export function fileSignedFileUrl(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseQianMingWenJianXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseQianMingWenJianXiangYing['data']>> {
  return usePost<ApiResponseQianMingWenJianXiangYing>(`/api/file/signedFileUrl`, data, useFetchOptions)
}

/** 文件自签名上传,文件路径诛仙剑 */
export function fileSignedFileUrlV2(data?: HuoQuALiYunQianMingRuCan, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseShangChuanALiYunQianMingXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseShangChuanALiYunQianMingXiangYing['data']>> {
  return usePost<ApiResponseShangChuanALiYunQianMingXiangYing>(`/api/file/signedFileUrlV2`, data, useFetchOptions)
}

/** 生成上传签名url */
export function fileUploadFile(data?: UploadFileReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsePutFileResp['data']> & PromiseLike<UseFetchReturn<ApiResponsePutFileResp['data']>> {
  return usePost<ApiResponsePutFileResp>(`/api/file/uploadFile`, data, useFetchOptions)
}
