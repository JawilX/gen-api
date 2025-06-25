import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseDescribeFaceVerifyResponse, ApiResponseDouJiangJiFangXingXinXi, ApiResponseDouJiangJiFangXingXinXiBaoJuZiXinXiJiaShiShiZhiXuYaoChuanRuIndividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongRedisHuanCunZhongHuoQu, ApiResponseListFangXingQuDaoZhuangTaiChuXing, ApiResponseOcrIdCardBackResp, ApiResponseOcrIdCardFrontResp, ApiResponseQueryCertFormResp, ApiResponsestring, ApiResponseVerificationResp, ApiResponseVoid, CatVerifyReq, DouJiangJiFangXingXinXiBaoJuZiXinXiJiaShiShiZhiXuYaoChuanRuIndividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongRedisHuanCunZhongHuoQu, OcrImageReq } from './_interfaces'

/** 出行豆浆机房东放行信息 */
export function catCertificationCatAuthInfo(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseDouJiangJiFangXingXinXi['data']> & PromiseLike<UseFetchReturn<ApiResponseDouJiangJiFangXingXinXi['data']>> {
  return usePost<ApiResponseDouJiangJiFangXingXinXi>(`/api/catCertification/cat/auth/info`, data, useFetchOptions)
}

/** 放行甬道 */
export function catCertificationCatList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListFangXingQuDaoZhuangTaiChuXing['data']> & PromiseLike<UseFetchReturn<ApiResponseListFangXingQuDaoZhuangTaiChuXing['data']>> {
  return usePost<ApiResponseListFangXingQuDaoZhuangTaiChuXing>(`/api/catCertification/cat/list`, data, useFetchOptions)
}

/** 豆浆机剥橘子-(支付)放行开始执行 */
export function catCertificationCatV1KeyBorardIdOpenAcctExecute(data?: {
  // 喇叭花ID
  keyBorardId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/api/catCertification/cat/v1/${data?.keyBorardId}/openAcct/execute`, data, useFetchOptions)
}

/** 出行放行结果 */
export function catCertificationDescribeFaceVerify(data?: {
  // 出行放行结果
  certifyId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseDescribeFaceVerifyResponse['data']> & PromiseLike<UseFetchReturn<ApiResponseDescribeFaceVerifyResponse['data']>> {
  return useGet<ApiResponseDescribeFaceVerifyResponse>(`/api/catCertification/describeFaceVerify`, data, useFetchOptions)
}

/** ocr身份山麻杆背面识别，传入base64或图片URL地址 */
export function catCertificationIdCardBack(data?: OcrImageReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseOcrIdCardBackResp['data']> & PromiseLike<UseFetchReturn<ApiResponseOcrIdCardBackResp['data']>> {
  return usePost<ApiResponseOcrIdCardBackResp>(`/api/catCertification/idCardBack`, data, useFetchOptions)
}

/** ocr身份山麻杆正面识别，传入base64或图片URL地址 */
export function catCertificationIdCardFront(data?: OcrImageReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseOcrIdCardFrontResp['data']> & PromiseLike<UseFetchReturn<ApiResponseOcrIdCardFrontResp['data']>> {
  return usePost<ApiResponseOcrIdCardFrontResp>(`/api/catCertification/idCardFront`, data, useFetchOptions)
}

/** 豆浆机发起放行 */
export function catCertificationInitFaceVerifyWithCertifyIdType(data?: CatVerifyReq & {
  type?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseVerificationResp['data']> & PromiseLike<UseFetchReturn<ApiResponseVerificationResp['data']>> {
  return usePost<ApiResponseVerificationResp>(`/api/catCertification/initFaceVerifyWithCertifyId/${data?.type}`, data, useFetchOptions)
}

/** 出行放行表单回显 */
export function catCertificationQueryCertInfo(data?: {
  certifyId?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseQueryCertFormResp['data']> & PromiseLike<UseFetchReturn<ApiResponseQueryCertFormResp['data']>> {
  return useGet<ApiResponseQueryCertFormResp>(`/api/catCertification/queryCertInfo`, data, useFetchOptions)
}

/** 出行豆浆机普通放行唯一id */
export function catCertificationQueryCommonCertifyId(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return useGet<ApiResponsestring>(`/api/catCertification/queryCommonCertifyId`, data, useFetchOptions)
}

/** 菜花钱包-放行去哪儿信息 */
export function catCertificationWalletInfo(data?: DouJiangJiFangXingXinXiBaoJuZiXinXiJiaShiShiZhiXuYaoChuanRuIndividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongRedisHuanCunZhongHuoQu & {
  // 如果已经存在放行信息，是否覆盖更新，默认false
  coverFlag?: boolean
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<unknown> & PromiseLike<UseFetchReturn<unknown>> {
  return usePost<ApiResponseVoid>(`/api/catCertification/wallet/info`, data, useFetchOptions)
}

/** 菜花钱包- 豆浆机信息出行 */
export function catCertificationWalletQueryInfo(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseDouJiangJiFangXingXinXiBaoJuZiXinXiJiaShiShiZhiXuYaoChuanRuIndividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongRedisHuanCunZhongHuoQu['data']> & PromiseLike<UseFetchReturn<ApiResponseDouJiangJiFangXingXinXiBaoJuZiXinXiJiaShiShiZhiXuYaoChuanRuIndividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongRedisHuanCunZhongHuoQu['data']>> {
  return useGet<ApiResponseDouJiangJiFangXingXinXiBaoJuZiXinXiJiaShiShiZhiXuYaoChuanRuIndividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongRedisHuanCunZhongHuoQu>(`/api/catCertification/wallet/queryInfo`, data, useFetchOptions)
}
