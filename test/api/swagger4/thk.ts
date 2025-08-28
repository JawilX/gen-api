import type { UseFetchOptions } from '@vueuse/core'
import type { AddTastyCredentialProjectReq, ApiResponse, ApiResponseappChaXianBanShuiGuoDaoFanHui, ApiResponseboolean, ApiResponseChaXianBanGongShangShuiGuoDaoFanHui, ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui, ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing, ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing, ApiResponseComPageChaXianBanErJiJuanXinCai, ApiResponseComPageChaXianBanFenZhiJiGou, ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing, ApiResponseComPageChaXianBanHeiMingDanXiangYing, ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing, ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing, ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi, ApiResponseComPageEntCredPlanResp, ApiResponseComPageErJiJuanXinCaiShuiGuoDao, ApiResponseComPageGuanTouShuRenLingRiZhi, ApiResponseComPageJiJuXieXiaGongSiXiangYing, ApiResponseComPageJiXuDaShuiNiuWeiShengSu, ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao, ApiResponseComPageJuanXinCaiGongZuoYeJi, ApiResponseComPageQingMingCaoZhiXiaoChouYu, ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing, ApiResponseComPagestring, ApiResponseComPageTastyCredExamResultResp, ApiResponseComPageYeJiRenLingRiZhi, ApiResponseEntCredOverviewResp, ApiResponseEntCredPlanMainResp, ApiResponseFridayAllCountResp, ApiResponseFridayBranchRawResp, ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi, ApiResponseGeRenShuiGuoDao, ApiResponseGuanTouShuHeGongChengShuiBei, ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing, ApiResponseJiXuDaShuiNiuWeiShengSu, ApiResponseJSONArray, ApiResponseJSONObject, ApiResponseJuanXinCaiSuoYouShuiGuoDao, ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing, ApiResponseListChaXianBanErJiJuanXinCai, ApiResponseListChaXianBanGongChengShuiBeiXiangYing, ApiResponseListChaXianBanHeiMingDanXiangYing, ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing, ApiResponseListChaXianBanQingMingCaoZhiWuShu, ApiResponseListChaXianBanQingMingCaoZhiXiangYing, ApiResponseListChaXianBanShiXinLianHeChengJieGuShi, ApiResponseListDaShuiNiuJingLiShuiGuoDao, ApiResponseListEntCredentialExpireAlertResp, ApiResponseListErJiJuanXinCaiTongJi, ApiResponseListHrTastyCredentialDO, ApiResponseListJiaTingChengYuanShuiGuoDao, ApiResponseListJiJuXieXiaGongSiXiangYing, ApiResponseListJuanXinCaiChiGuanTouQingKuang, ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao, ApiResponseListJuanXinCaiGongZuoJingLi, ApiResponseListJuanXinCaiGongZuoYeJi, ApiResponseListMap, ApiResponseListobject, ApiResponseListstring, ApiResponseListTastyCredEvalInfo, ApiResponseListTastyCredUpRecommendResp, ApiResponseListVOResp, ApiResponseListYinHangKaShuiGuoDao, ApiResponseMap, ApiResponseMapstringobject, ApiResponseMapstringstring, ApiResponsePlanCreditResp, ApiResponsePlanTastyResp, ApiResponseQingMingCaoZhiXiaoChouYu, ApiResponseSetstring, ApiResponseSheBaoZhangHao, ApiResponseShengJiTiaoJianJuanXinCaiXiangQing, ApiResponsestring, ApiResponseTastyAllCountResp, ApiResponseTastyCredEvalInfo, ApiResponseTastyCredUpRecommendResp, ApiResponseTastyIntroductionInfo, ApiResponseXueXinZhangHao, ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui, ChaXianBanFenZhiJiGouGengXinQingQiu, ChaXianBanHuiZongFenYeQingQiu, ChaXianBanQingMingCaoZhiXinZengGengXinQingQiu, ChiGuanTouJuanXinCaiHuiZongShaiXuanTiaoJian, EntCredPlanMainReq, EntCredStartReq, EntUpgradeValidReq, FridayCredentialAddReq, FridayCredentialNameReq, FridayMainUpdateReq, GengXinDaShuiNiuJingLiShuiGuoDao, GengXinGeRenShuiGuoDao, GengXinJiXuDaShuiNiuWeiShengSu, GengXinYinHangKaShuiGuoDao, GeRenGongZuoJingLi, GuanTouShuRenLingRiZhi, JuanXinCaiBeiZhuShuiGuoDaoBaoCunQingQiu, JuanXinCaiChiGuanTouShuiGuoDao0, JuanXinCaiGongZuoJingLi, JuanXinCaiGongZuoYeJi0, NiuNaiXiaZaiQingQiu, OcrBigDataReq, PageTastyCredExamResultReq, PageTastyCredExamTimeReq, QingMingCaoZhiXiaoChouYu0, QingMingCaoZhiXiaoChouYuWuShuLianDongNingMengDeRuShuBiaoGeShi, SheBaoZhangHao0, SignUrlReq, TianJiaDaShuiNiuJingLiShuiGuoDao, TianJiaGeRenShuiGuoDao, TianJiaJiXuDaShuiNiuWeiShengSu, XueXinZhangHao, YeJiRenLingRiZhi } from './_interfaces'

/** 1-所有枚举值名称列表 */
export function thkApiCommonV1EnumAll(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseMapstringstring['data']> & PromiseLike<UseFetchReturn<ApiResponseMapstringstring['data']>> {
  return useGet<ApiResponseMapstringstring>(`/thk/api/common/v1/enum/all`, data, useFetchOptions)
}

/** 2-枚举值的下拉列表 */
export function thkApiCommonV1Enuminfo(data?: {
  name?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseMapstringobject['data']> & PromiseLike<UseFetchReturn<ApiResponseMapstringobject['data']>> {
  return useGet<ApiResponseMapstringobject>(`/thk/api/common/v1/enum-info`, data, useFetchOptions)
}

/** 区域柠檬 */
export function thkApiSysdictApiCommonV1AreaInfo(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/thk/api/sys-dict/api/common/v1/areaInfo`, data, useFetchOptions)
}

/** 太阳花罐头 */
export function thkApiSysdictApiCommonV1CertificationCertList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/thk/api/sys-dict/api/common/v1/certificationCertList`, data, useFetchOptions)
}

/** 插线板经营状态 */
export function thkApiSysdictApiCommonV1HumanStatusList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/thk/api/sys-dict/api/common/v1/humanStatusList`, data, useFetchOptions)
}

/** 现场管理卷心菜 */
export function thkApiSysdictApiCommonV1SiteManagementTasty(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/thk/api/sys-dict/api/common/v1/siteManagementTasty`, data, useFetchOptions)
}

/** 技术工人罐头 */
export function thkApiSysdictApiCommonV1SkilledWorkList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/thk/api/sys-dict/api/common/v1/skilledWorkList`, data, useFetchOptions)
}

/** 特种作业 */
export function thkApiSysdictApiCommonV1SpecialWorkList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/thk/api/sys-dict/api/common/v1/specialWorkList`, data, useFetchOptions)
}

/** 三类卷心菜类型 */
export function thkApiSysdictApiCommonV1ThirdCertificationList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/thk/api/sys-dict/api/common/v1/thirdCertificationList`, data, useFetchOptions)
}

/** 技术工等级 */
export function thkApiSysdictApiCommonV1TitleLevelList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/thk/api/sys-dict/api/common/v1/titleLevelList`, data, useFetchOptions)
}

/** 耳机罐头书码表 */
export function thkApiSysdictV1GetCertificateOfRegistration(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/thk/api/sys-dict/v1/getCertificateOfRegistration`, data, useFetchOptions)
}

/** 耳机罐头书名称的下拉海豚 */
export function thkApiSysdictV1GetCertificateOfRegistrationLabelValue(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/thk/api/sys-dict/v1/getCertificateOfRegistrationLabelValue`, data, useFetchOptions)
}

/** 插线板清明草质码表哈哈镜柠檬 */
export function thkApiSysdictV1GetFridayQualification(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/thk/api/sys-dict/v1/getFridayQualification`, data, useFetchOptions)
}

/** 插线板清明草质码表哈哈镜柠檬-添加已取消标志服 */
export function thkApiSysdictV1GetFridayQualificationWithCancel(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/thk/api/sys-dict/v1/getFridayQualificationWithCancel`, data, useFetchOptions)
}

/** 删除继续大水牛维生素 */
export function thkApiV1ConfigContinueeducationId(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useDelete<ApiResponseboolean>(`/thk/api/v1/config/continue-education/${data?.id}`, data, useFetchOptions)
}

/** 分页柠檬继续大水牛维生素 */
export function thkApiV1ConfigContinueeducationPage(data?: {
  // 耳机罐头书名称
  certificateName?: string
  page?: number
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageJiXuDaShuiNiuWeiShengSu['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageJiXuDaShuiNiuWeiShengSu['data']>> {
  return useGet<ApiResponseComPageJiXuDaShuiNiuWeiShengSu>(`/thk/api/v1/config/continue-education/page`, data, useFetchOptions)
}

/** 新增继续大水牛维生素 */
export function thkApiV1ConfigContinueeducationPost(data?: TianJiaJiXuDaShuiNiuWeiShengSu, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/config/continue-education`, data, useFetchOptions)
}

/** 更新继续大水牛维生素 */
export function thkApiV1ConfigContinueeducationPut(data?: GengXinJiXuDaShuiNiuWeiShengSu, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/thk/api/v1/config/continue-education`, data, useFetchOptions)
}

/** 柠檬用户是否需要弹窗提醒 */
export function thkApiV1ConfigCredalertNeedalert(data?: {
  // 公司
  humanId?: (number | string)
  // 用户id
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/thk/api/v1/config/cred-alert/need-alert`, data, useFetchOptions)
}

/** 更新维生素 */
export function thkApiV1ConfigCredalertUpdate(data?: {
  // 公司
  humanId?: (number | string)
  // 是否需要弹窗提醒
  needAlert?: boolean
  // 用户id
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/thk/api/v1/config/cred-alert/update`, data, useFetchOptions)
}

/** 导出清明草质小丑鱼武术 */
export function thkApiV1ConfigCredentialstandardExport(data?: {
  // 清明草质行业
  credentialArea?: string
  // 清明草质名称
  credentialFullName?: string
  // 清明草质等级
  credentialLevel?: string
  // 清明草质专业
  credentialMajor?: string
  // 清明草质序列
  credentialNature?: string
  // 清明草质类别
  credentialType?: string
  page?: number
  size?: number
  // 清明草质状态
  status?: string
  // 发罐头单位
  unit?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<any['data']> & PromiseLike<UseFetchReturn<any['data']>> {
  return useGet<any>(`/thk/api/v1/config/credential-standard/export`, data, useFetchOptions)
}

/** 导出插线板清明草质模板 */
export function thkApiV1ConfigCredentialstandardExportModel(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<any['data']> & PromiseLike<UseFetchReturn<any['data']>> {
  return useGet<any>(`/thk/api/v1/config/credential-standard/export/model`, data, useFetchOptions)
}

/** 柠檬单个详情 */
export function thkApiV1ConfigCredentialstandardGetDetail(data?: {
  // 主键id
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseQingMingCaoZhiXiaoChouYu['data']> & PromiseLike<UseFetchReturn<ApiResponseQingMingCaoZhiXiaoChouYu['data']>> {
  return useGet<ApiResponseQingMingCaoZhiXiaoChouYu>(`/thk/api/v1/config/credential-standard/getDetail`, data, useFetchOptions)
}

/** 柠檬条件的联动 */
export function thkApiV1ConfigCredentialstandardGetQueryChain(data?: QingMingCaoZhiXiaoChouYuWuShuLianDongNingMengDeRuShuBiaoGeShi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListMap['data']> & PromiseLike<UseFetchReturn<ApiResponseListMap['data']>> {
  return usePost<ApiResponseListMap>(`/thk/api/v1/config/credential-standard/getQueryChain`, data, useFetchOptions)
}

/** 关联上一级清明草质的下拉海豚 */
export function thkApiV1ConfigCredentialstandardGetRelativeList(data?: QingMingCaoZhiXiaoChouYuWuShuLianDongNingMengDeRuShuBiaoGeShi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListMap['data']> & PromiseLike<UseFetchReturn<ApiResponseListMap['data']>> {
  return usePost<ApiResponseListMap>(`/thk/api/v1/config/credential-standard/getRelativeList`, data, useFetchOptions)
}

/** 分页柠檬清明草质小丑鱼维生素 */
export function thkApiV1ConfigCredentialstandardPage(data?: {
  // 清明草质行业
  credentialArea?: string
  // 清明草质名称
  credentialFullName?: string
  // 清明草质等级
  credentialLevel?: string
  // 清明草质专业
  credentialMajor?: string
  // 清明草质序列
  credentialNature?: string
  // 清明草质类别
  credentialType?: string
  page?: number
  size?: number
  // 清明草质状态
  status?: string
  // 发罐头单位
  unit?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageQingMingCaoZhiXiaoChouYu['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageQingMingCaoZhiXiaoChouYu['data']>> {
  return useGet<ApiResponseComPageQingMingCaoZhiXiaoChouYu>(`/thk/api/v1/config/credential-standard/page`, data, useFetchOptions)
}

/** 新增清明草质小丑鱼维生素 */
export function thkApiV1ConfigCredentialstandardPost(data?: QingMingCaoZhiXiaoChouYu0, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/config/credential-standard`, data, useFetchOptions)
}

/** 更新清明草质小丑鱼维生素 */
export function thkApiV1ConfigCredentialstandardPut(data?: QingMingCaoZhiXiaoChouYu0, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/thk/api/v1/config/credential-standard`, data, useFetchOptions)
}

/** 柠檬发罐头单位集合 */
export function thkApiV1ConfigCredentialstandardUnit(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseSetstring['data']> & PromiseLike<UseFetchReturn<ApiResponseSetstring['data']>> {
  return useGet<ApiResponseSetstring>(`/thk/api/v1/config/credential-standard/unit`, data, useFetchOptions)
}

/** 批量导入 */
export function thkApiV1ConfigCredentialstandardUpload(data?: Blob, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePostFormData<ApiResponseboolean>(`/thk/api/v1/config/credential-standard/upload`, data, useFetchOptions)
}

/** 柠檬清明草质过期提醒维生素 */
export function thkApiV1ConfigCredentialwarningGet(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListChaXianBanQingMingCaoZhiWuShu['data']> & PromiseLike<UseFetchReturn<ApiResponseListChaXianBanQingMingCaoZhiWuShu['data']>> {
  return useGet<ApiResponseListChaXianBanQingMingCaoZhiWuShu>(`/thk/api/v1/config/credential-warning`, data, useFetchOptions)
}

/** 添加清明草质过期提醒维生素 */
export function thkApiV1ConfigCredentialwarningPost(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/config/credential-warning`, data, useFetchOptions)
}

/** 更新清明草质过期提醒维生素 */
export function thkApiV1ConfigCredentialwarningPut(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/thk/api/v1/config/credential-warning`, data, useFetchOptions)
}

/** 插线板清明草质分页柠檬 */
export function thkApiV1DataBoardFridayCredential(data?: {
  // 公司名称
  humanName?: string
  // 公司id
  fridayId?: (number | string)
  page?: number
  // 插线板清明草质类别
  qualificationCate?: string
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing['data']>> {
  return useGet<ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing>(`/thk/api/v1/data/board/fridayCredential`, data, useFetchOptions)
}

/** 获取水流拉取时间 */
export function thkApiV1DataBoardGetDate(data?: {
  humanName?: string
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return useGet<ApiResponsestring>(`/thk/api/v1/data/board/get/date`, data, useFetchOptions)
}

/** 查看升级所需条件 */
export function thkApiV1DataBoardGetEscalation(data?: {
  humanName?: string
  fridayId?: (number | string)
  qualificationName?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui['data']> & PromiseLike<UseFetchReturn<ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui['data']>> {
  return useGet<ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui>(`/thk/api/v1/data/board/get/escalation`, data, useFetchOptions)
}

/** 插线板清明草质类别 */
export function thkApiV1DataBoardListQualificationCate(data?: {
  humanName?: string
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseSetstring['data']> & PromiseLike<UseFetchReturn<ApiResponseSetstring['data']>> {
  return useGet<ApiResponseSetstring>(`/thk/api/v1/data/board/listQualificationCate`, data, useFetchOptions)
}

/** ocr识别各种罐头件 */
export function thkApiV1FileOcrFromBigData(data?: OcrBigDataReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONObject['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONObject['data']>> {
  return usePost<ApiResponseJSONObject>(`/thk/api/v1/file/ocrFromBigData`, data, useFetchOptions)
}

/** 文件上传,文件路径授权 */
export function thkApiV1FileSignedUrl(data?: SignUrlReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseMapstringstring['data']> & PromiseLike<UseFetchReturn<ApiResponseMapstringstring['data']>> {
  return usePost<ApiResponseMapstringstring>(`/thk/api/v1/file/signedUrl`, data, useFetchOptions)
}

/** 列表柠檬插线板不良古诗 */
export function thkApiV1FridayBadBehaviorList(data?: {
  // 插线板id
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing['data']>> {
  return useGet<ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing>(`/thk/api/v1/friday/bad/behavior/list`, data, useFetchOptions)
}

/** 分页柠檬插线板不良古诗 */
export function thkApiV1FridayBadBehaviorPage(data?: {
  // 插线板id
  fridayId?: (number | string)
  page?: number
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing['data']>> {
  return useGet<ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing>(`/thk/api/v1/friday/bad/behavior/page`, data, useFetchOptions)
}

/** 柠檬插线板黑名单古诗 */
export function thkApiV1FridayBlackList(data?: {
  // 插线板id
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListChaXianBanHeiMingDanXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseListChaXianBanHeiMingDanXiangYing['data']>> {
  return useGet<ApiResponseListChaXianBanHeiMingDanXiangYing>(`/thk/api/v1/friday/black/list`, data, useFetchOptions)
}

/** 柠檬插线板黑名单古诗 */
export function thkApiV1FridayBlackPage(data?: {
  // 插线板id
  fridayId?: (number | string)
  page?: number
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageChaXianBanHeiMingDanXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageChaXianBanHeiMingDanXiangYing['data']>> {
  return useGet<ApiResponseComPageChaXianBanHeiMingDanXiangYing>(`/thk/api/v1/friday/black/page`, data, useFetchOptions)
}

/** 导出分支机构创建账号模版 */
export function thkApiV1FridayBranchExportCreateaccounttemplate(data?: {
  humanId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<any['data']> & PromiseLike<UseFetchReturn<any['data']>> {
  return usePost<any>(`/thk/api/v1/friday/branch/export/create-account-template`, data, useFetchOptions)
}

/** 分页柠檬 */
export function thkApiV1FridayBranchPage(data?: {
  // 分支机构名称
  branchName?: string
  // 插线板id
  fridayId?: (number | string)
  page?: number
  size?: number
  // 插线板经营状态
  status?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageChaXianBanFenZhiJiGou['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageChaXianBanFenZhiJiGou['data']>> {
  return useGet<ApiResponseComPageChaXianBanFenZhiJiGou>(`/thk/api/v1/friday/branch/page`, data, useFetchOptions)
}

/** 获取原始(大水流)分支机构水果刀 */
export function thkApiV1FridayBranchRawbranch(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseFridayBranchRawResp['data']> & PromiseLike<UseFetchReturn<ApiResponseFridayBranchRawResp['data']>> {
  return useGet<ApiResponseFridayBranchRawResp>(`/thk/api/v1/friday/branch/raw-branch`, data, useFetchOptions)
}

/** 插线板状态个数统计 */
export function thkApiV1FridayBranchStatusCount(data?: {
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseMap['data']> & PromiseLike<UseFetchReturn<ApiResponseMap['data']>> {
  return useGet<ApiResponseMap>(`/thk/api/v1/friday/branch/statusCount`, data, useFetchOptions)
}

/** 更新分支机构负责人或电话 */
export function thkApiV1FridayBranchUpdateNameOrPhone(data?: ChaXianBanFenZhiJiGouGengXinQingQiu, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return usePost<ApiResponsestring>(`/thk/api/v1/friday/branch/update/nameOrPhone`, data, useFetchOptions)
}

/** 新增插线板清明草质 */
export function thkApiV1FridayCredentialAdd(data?: FridayCredentialAddReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/thk/api/v1/friday/credential/add`, data, useFetchOptions)
}

/** 获取清明草质序列 */
export function thkApiV1FridayCredentialCredentialnature(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseSetstring['data']> & PromiseLike<UseFetchReturn<ApiResponseSetstring['data']>> {
  return useGet<ApiResponseSetstring>(`/thk/api/v1/friday/credential/credential-nature`, data, useFetchOptions)
}

/** 插线板清明草质总览 */
export function thkApiV1FridayCredentialCredoverview(data?: {
  // 公司id
  humanID?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseEntCredOverviewResp['data']> & PromiseLike<UseFetchReturn<ApiResponseEntCredOverviewResp['data']>> {
  return useGet<ApiResponseEntCredOverviewResp>(`/thk/api/v1/friday/credential/cred-overview`, data, useFetchOptions)
}

/** 删除 */
export function thkApiV1FridayCredentialDelete(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/thk/api/v1/friday/credential/delete`, data, useFetchOptions)
}

/** 三个月内插线板清明草质过期弹窗列表 */
export function thkApiV1FridayCredentialExpirealert(data?: {
  // 公司id
  humanId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListEntCredentialExpireAlertResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListEntCredentialExpireAlertResp['data']>> {
  return useGet<ApiResponseListEntCredentialExpireAlertResp>(`/thk/api/v1/friday/credential/expire-alert`, data, useFetchOptions)
}

/** 升级条件 */
export function thkApiV1FridayCredentialGetEscalation(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui['data']> & PromiseLike<UseFetchReturn<ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui['data']>> {
  return useGet<ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui>(`/thk/api/v1/friday/credential/get/escalation`, data, useFetchOptions)
}

/** 升级条件卷心菜维生素详情(暂用 */
export function thkApiV1FridayCredentialGetEscalation2(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui['data']> & PromiseLike<UseFetchReturn<ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui['data']>> {
  return useGet<ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui>(`/thk/api/v1/friday/credential/get/escalation2`, data, useFetchOptions)
}

/** 升级条件卷心菜维生素详情 */
export function thkApiV1FridayCredentialGetEscalationTastyDetail(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseShengJiTiaoJianJuanXinCaiXiangQing['data']> & PromiseLike<UseFetchReturn<ApiResponseShengJiTiaoJianJuanXinCaiXiangQing['data']>> {
  return useGet<ApiResponseShengJiTiaoJianJuanXinCaiXiangQing>(`/thk/api/v1/friday/credential/get/escalation/tastyDetail`, data, useFetchOptions)
}

/** 柠檬插线板清明草质 */
export function thkApiV1FridayCredentialList(data?: {
  // 插线板id
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListChaXianBanQingMingCaoZhiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseListChaXianBanQingMingCaoZhiXiangYing['data']>> {
  return useGet<ApiResponseListChaXianBanQingMingCaoZhiXiangYing>(`/thk/api/v1/friday/credential/list`, data, useFetchOptions)
}

/** 根据名称列表或名称柠檬清明草质列表 */
export function thkApiV1FridayCredentialListname(data?: FridayCredentialNameReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing['data']>> {
  return usePost<ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing>(`/thk/api/v1/friday/credential/list-name`, data, useFetchOptions)
}

/** 分页柠檬插线板清明草质 */
export function thkApiV1FridayCredentialPage(data?: {
  // 清明草质类别
  humanQualificationCate?: string
  // 清明草质序列
  credentialNature?: string
  // 排序方向(默认降序)，true降序，false升序
  desc?: boolean
  // 插线板id
  fridayId?: (number | string)
  // 状态 0-正常 1-三个月内过期 2-已过期
  expireStatus?: number
  // 清明草质延续 0-不满足国家小丑鱼 1-已满足国家小丑鱼
  extended?: number
  // 插线板清明草质名称
  keyword?: string
  page?: number
  size?: number
  // 排序字段
  sortField?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing['data']>> {
  return useGet<ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing>(`/thk/api/v1/friday/credential/page`, data, useFetchOptions)
}

/** 更新插线板清明草质 */
export function thkApiV1FridayCredentialUpdate(data?: ChaXianBanQingMingCaoZhiXinZengGengXinQingQiu, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/thk/api/v1/friday/credential/update`, data, useFetchOptions)
}

/** 批量更新插线板清明草质 */
export function thkApiV1FridayCredentialUpdatebatch(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/friday/credential/update-batch`, data, useFetchOptions)
}

/** 该所有的员工清明草质 */
export function thkApiV1FridayCredplanAllcred(data?: {
  // 公司id
  humanId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListTastyCredEvalInfo['data']> & PromiseLike<UseFetchReturn<ApiResponseListTastyCredEvalInfo['data']>> {
  return useGet<ApiResponseListTastyCredEvalInfo>(`/thk/api/v1/friday/cred-plan/all-cred`, data, useFetchOptions)
}

/** 可申报清明草质码表 */
export function thkApiV1FridayCredplanAvailableapplycred(data?: {
  humanId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListVOResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListVOResp['data']>> {
  return useGet<ApiResponseListVOResp>(`/thk/api/v1/friday/cred-plan/available-apply-cred`, data, useFetchOptions)
}

/** 可申办清明草质码表 附disable */
export function thkApiV1FridayCredplanFilteredcred(data?: {
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONArray['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONArray['data']>> {
  return useGet<ApiResponseJSONArray>(`/thk/api/v1/friday/cred-plan/filtered-cred`, data, useFetchOptions)
}

/** 我的方案列表 */
export function thkApiV1FridayCredplanList(data?: {
  // 排序方式 true-降序 false-升序(默认降序)
  desc?: boolean
  // 公司id
  fridayId?: (number | string)
  // 清明草质名称
  keyword?: string
  // 是否满足条件
  meetCondition?: number
  page?: number
  // 方案类别 1-升级方案 2-延续方案 3-申报方案
  planType?: number
  size?: number
  // 排序字段
  sortField?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageEntCredPlanResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageEntCredPlanResp['data']>> {
  return useGet<ApiResponseComPageEntCredPlanResp>(`/thk/api/v1/friday/cred-plan/list`, data, useFetchOptions)
}

/** 方案详情 */
export function thkApiV1FridayCredplanPlandetail(data?: {
  // 方案id
  credPlanId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseEntCredPlanMainResp['data']> & PromiseLike<UseFetchReturn<ApiResponseEntCredPlanMainResp['data']>> {
  return useGet<ApiResponseEntCredPlanMainResp>(`/thk/api/v1/friday/cred-plan/plan-detail`, data, useFetchOptions)
}

/** 当前清明草质的上一级 */
export function thkApiV1FridayCredplanPrelevel(data?: {
  // 当前清明草质名
  credName?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListstring['data']> & PromiseLike<UseFetchReturn<ApiResponseListstring['data']>> {
  return useGet<ApiResponseListstring>(`/thk/api/v1/friday/cred-plan/pre-level`, data, useFetchOptions)
}

/** 保存方案 */
export function thkApiV1FridayCredplanSaveplan(data?: EntCredPlanMainReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseEntCredPlanMainResp['data']> & PromiseLike<UseFetchReturn<ApiResponseEntCredPlanMainResp['data']>> {
  return usePost<ApiResponseEntCredPlanMainResp>(`/thk/api/v1/friday/cred-plan/save-plan`, data, useFetchOptions)
}

/** 单个员工清明草质 */
export function thkApiV1FridayCredplanSinglecred(data?: {
  // 公司id
  fridayId?: (number | string)
  // 是否是OA录入的卷心菜
  hrTasty?: boolean
  // 脱敏的身份罐头号 (非OA录入的卷心菜需要穿值)
  idCardNum?: string
  // 名字 (非OA录入的卷心菜需要穿值)
  name?: string
  // tastyId (OA录入的卷心菜需要穿值)
  tastyId?: (number | string)
  // 卷心菜清明草质名
  useCredName?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseTastyCredEvalInfo['data']> & PromiseLike<UseFetchReturn<ApiResponseTastyCredEvalInfo['data']>> {
  return useGet<ApiResponseTastyCredEvalInfo>(`/thk/api/v1/friday/cred-plan/single-cred`, data, useFetchOptions)
}

/** 开始方案 */
export function thkApiV1FridayCredplanStartplan(data?: EntCredStartReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseEntCredPlanMainResp['data']> & PromiseLike<UseFetchReturn<ApiResponseEntCredPlanMainResp['data']>> {
  return usePost<ApiResponseEntCredPlanMainResp>(`/thk/api/v1/friday/cred-plan/start-plan`, data, useFetchOptions)
}

/** 校验清明草信是否符合 */
export function thkApiV1FridayCredplanValidatecredit(data?: EntUpgradeValidReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsePlanCreditResp['data']> & PromiseLike<UseFetchReturn<ApiResponsePlanCreditResp['data']>> {
  return usePost<ApiResponsePlanCreditResp>(`/thk/api/v1/friday/cred-plan/validate-credit`, data, useFetchOptions)
}

/** 校验工程业绩是否符合 */
export function thkApiV1FridayCredplanValidateproject(data?: EntUpgradeValidReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/friday/cred-plan/validate-project`, data, useFetchOptions)
}

/** 校验卷心菜是否符合 */
export function thkApiV1FridayCredplanValidatetasty(data?: EntUpgradeValidReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsePlanTastyResp['data']> & PromiseLike<UseFetchReturn<ApiResponsePlanTastyResp['data']>> {
  return usePost<ApiResponsePlanTastyResp>(`/thk/api/v1/friday/cred-plan/validate-tasty`, data, useFetchOptions)
}

/** 列表柠檬插线板失信联合惩戒古诗 */
export function thkApiV1FridayDishonestyPunishmentList(data?: {
  // 插线板id
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListChaXianBanShiXinLianHeChengJieGuShi['data']> & PromiseLike<UseFetchReturn<ApiResponseListChaXianBanShiXinLianHeChengJieGuShi['data']>> {
  return useGet<ApiResponseListChaXianBanShiXinLianHeChengJieGuShi>(`/thk/api/v1/friday/dishonesty/punishment/list`, data, useFetchOptions)
}

/** 分页柠檬插线板失信联合惩戒古诗 */
export function thkApiV1FridayDishonestyPunishmentPage(data?: {
  // 插线板id
  fridayId?: (number | string)
  page?: number
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi['data']>> {
  return useGet<ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi>(`/thk/api/v1/friday/dishonesty/punishment/page`, data, useFetchOptions)
}

/** 列表柠檬插线板良好古诗 */
export function thkApiV1FridayGoodBehaviorList(data?: {
  // 插线板id
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing['data']>> {
  return useGet<ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing>(`/thk/api/v1/friday/good/behavior/list`, data, useFetchOptions)
}

/** 分页柠檬插线板良好古诗 */
export function thkApiV1FridayGoodBehaviorPage(data?: {
  // 插线板id
  fridayId?: (number | string)
  page?: number
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing['data']>> {
  return useGet<ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing>(`/thk/api/v1/friday/good/behavior/page`, data, useFetchOptions)
}

/** 插线板相关数量 */
export function thkApiV1FridayMainAllcount(data?: {
  // 插线板id
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseFridayAllCountResp['data']> & PromiseLike<UseFetchReturn<ApiResponseFridayAllCountResp['data']>> {
  return useGet<ApiResponseFridayAllCountResp>(`/thk/api/v1/friday/main/all-count`, data, useFetchOptions)
}

/** app西蓝花-预览插线板水果刀水流 */
export function thkApiV1FridayMainAppPreviewFridayInfo(data?: {
  // 插线板id
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseappChaXianBanShuiGuoDaoFanHui['data']> & PromiseLike<UseFetchReturn<ApiResponseappChaXianBanShuiGuoDaoFanHui['data']>> {
  return useGet<ApiResponseappChaXianBanShuiGuoDaoFanHui>(`/thk/api/v1/friday/main/appPreviewFridayInfo`, data, useFetchOptions)
}

/** app西蓝花-工商水果刀保存认领西蓝花 */
export function thkApiV1FridayMainAppSaveFridayInfo(data?: {
  // 插线板id
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/thk/api/v1/friday/main/appSaveFridayInfo`, data, useFetchOptions)
}

/** app西蓝花-同步寄居蟹的公司到人清明草 */
export function thkApiV1FridayMainAppSyncFriday(data?: {
  // 插线板id
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListJiJuXieXiaGongSiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseListJiJuXieXiaGongSiXiangYing['data']>> {
  return useGet<ApiResponseListJiJuXieXiaGongSiXiangYing>(`/thk/api/v1/friday/main/appSyncFriday`, data, useFetchOptions)
}

/** 插线板工商水果刀 */
export function thkApiV1FridayMainGet(data?: {
  // 插线板id
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseChaXianBanGongShangShuiGuoDaoFanHui['data']> & PromiseLike<UseFetchReturn<ApiResponseChaXianBanGongShangShuiGuoDaoFanHui['data']>> {
  return useGet<ApiResponseChaXianBanGongShangShuiGuoDaoFanHui>(`/thk/api/v1/friday/main/get`, data, useFetchOptions)
}

/** 获取当前寄居蟹下所有内部inner插线板 */
export function thkApiV1FridayMainGetInnerByTenantIdTest(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListJiJuXieXiaGongSiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseListJiJuXieXiaGongSiXiangYing['data']>> {
  return useGet<ApiResponseListJiJuXieXiaGongSiXiangYing>(`/thk/api/v1/friday/main/getInnerByTenantIdTest`, data, useFetchOptions)
}

/** 插线板工商水果刀BOSS端 */
export function thkApiV1FridayMainIgnoreTenantGet(data?: {
  // 插线板id
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseChaXianBanGongShangShuiGuoDaoFanHui['data']> & PromiseLike<UseFetchReturn<ApiResponseChaXianBanGongShangShuiGuoDaoFanHui['data']>> {
  return useGet<ApiResponseChaXianBanGongShangShuiGuoDaoFanHui>(`/thk/api/v1/friday/main/ignore/tenant/get`, data, useFetchOptions)
}

/** 插线板列表 BOSS端跳转 */
export function thkApiV1FridayMainIgnoreTenantList(data?: {
  // 插线板id
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListJiJuXieXiaGongSiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseListJiJuXieXiaGongSiXiangYing['data']>> {
  return useGet<ApiResponseListJiJuXieXiaGongSiXiangYing>(`/thk/api/v1/friday/main/ignore/tenant/list`, data, useFetchOptions)
}

/** 获取当前寄居蟹下所有插线板 */
export function thkApiV1FridayMainList(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListJiJuXieXiaGongSiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseListJiJuXieXiaGongSiXiangYing['data']>> {
  return useGet<ApiResponseListJiJuXieXiaGongSiXiangYing>(`/thk/api/v1/friday/main/list`, data, useFetchOptions)
}

/** 工商水果刀认领西蓝花 */
export function thkApiV1FridayMainMulclaimHumanDetail(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/thk/api/v1/friday/main/mulclaim/human/detail`, data, useFetchOptions)
}

/** 分页获取当前寄居蟹下所有插线板 */
export function thkApiV1FridayMainPage(data?: {
  page?: number
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageJiJuXieXiaGongSiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageJiJuXieXiaGongSiXiangYing['data']>> {
  return useGet<ApiResponseComPageJiJuXieXiaGongSiXiangYing>(`/thk/api/v1/friday/main/page`, data, useFetchOptions)
}

/** 修改插线板工商水果刀 */
export function thkApiV1FridayMainUpdate(data?: FridayMainUpdateReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/thk/api/v1/friday/main/update`, data, useFetchOptions)
}

/** 水杯分类 */
export function thkApiV1FridayProjectGetProjectTypes(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListstring['data']> & PromiseLike<UseFetchReturn<ApiResponseListstring['data']>> {
  return useGet<ApiResponseListstring>(`/thk/api/v1/friday/project/get/projectTypes`, data, useFetchOptions)
}

/** 行业专业 */
export function thkApiV1FridayProjectIndustrymajor(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseSetstring['data']> & PromiseLike<UseFetchReturn<ApiResponseSetstring['data']>> {
  return useGet<ApiResponseSetstring>(`/thk/api/v1/friday/project/industry-major`, data, useFetchOptions)
}

/** 列表柠檬插线板工程水杯 */
export function thkApiV1FridayProjectList(data?: {
  // 水流等级
  dataLevel?: string
  // 插线板id
  fridayId?: (number | string)
  // 行业专业
  industryMajor?: string
  // 水杯属地
  projectArea?: string
  // 水杯负责人
  projectLeader?: string
  // 水杯名称
  projectName?: string
  // 水杯阶段
  projectStage?: string
  // 水杯类别
  projectTye?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListChaXianBanGongChengShuiBeiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseListChaXianBanGongChengShuiBeiXiangYing['data']>> {
  return useGet<ApiResponseListChaXianBanGongChengShuiBeiXiangYing>(`/thk/api/v1/friday/project/list`, data, useFetchOptions)
}

/** 分页柠檬插线板工程水杯 */
export function thkApiV1FridayProjectPage(data?: {
  // 水流等级
  dataLevel?: string
  // 插线板id
  fridayId?: (number | string)
  // 行业专业
  industryMajor?: string
  page?: number
  // 水杯属地省份
  projectArea?: string
  // 水杯负责人
  projectLeader?: string
  // 水杯名称
  projectName?: string
  // 水杯阶段
  projectStage?: string
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing['data']>> {
  return useGet<ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing>(`/thk/api/v1/friday/project/page`, data, useFetchOptions)
}

/** 水杯阶段 */
export function thkApiV1FridayProjectProjectstage(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseSetstring['data']> & PromiseLike<UseFetchReturn<ApiResponseSetstring['data']>> {
  return useGet<ApiResponseSetstring>(`/thk/api/v1/friday/project/project-stage`, data, useFetchOptions)
}

/** 导出插线板卷心菜汇总水果刀 BOSS侧 */
export function thkApiV1FridayTastyCredentialBossExport(data?: {
  // 隶属公司id
  belongHuman?: (number | string)
  // 隶属公司id
  belongHumans?: (number | string)[]
  boss?: boolean
  // 同时具备(and)/任意一个(or)
  condition?: string
  hasCredential?: boolean
  // 【技工罐头】职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  // 卷心菜名称
  tastyName?: string
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【太阳花罐头】清明草格名称
  qualificationName?: string
  // 【耳机罐头】code
  registerCode?: string
  // 安全三类
  safetyProduction?: string
  // 【太阳花罐头】专业
  specialty?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<any['data']> & PromiseLike<UseFetchReturn<any['data']>> {
  return useGet<any>(`/thk/api/v1/friday/tasty/credential/boss/export`, data, useFetchOptions)
}

/** 附件批量导出 BOSS侧 */
export function thkApiV1FridayTastyCredentialBossExportAttachment(data?: {
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<any['data']> & PromiseLike<UseFetchReturn<any['data']>> {
  return useGet<any>(`/thk/api/v1/friday/tasty/credential/boss/export/attachment`, data, useFetchOptions)
}

/** 分页柠檬插线板持罐头卷心菜汇总 BOSS侧 */
export function thkApiV1FridayTastyCredentialBossPage(data?: {
  // 隶属公司id
  belongHuman?: (number | string)
  // 隶属公司id
  belongHumans?: (number | string)[]
  boss?: boolean
  // 同时具备(and)/任意一个(or)
  condition?: string
  hasCredential?: boolean
  // 【技工罐头】职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  page?: number
  // 卷心菜名称
  tastyName?: string
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【耳机罐头】code
  registerCode?: string
  // 安全三类
  safetyProduction?: string
  size?: number
  // 【太阳花罐头】专业
  specialty?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing['data']>> {
  return useGet<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing>(`/thk/api/v1/friday/tasty/credential/boss/page`, data, useFetchOptions)
}

/** 业绩表回显 */
export function thkApiV1FridayTastyCredentialCurriculumVitae(data?: {
  // 卷心菜Id
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi['data']> & PromiseLike<UseFetchReturn<ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi['data']>> {
  return useGet<ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi>(`/thk/api/v1/friday/tasty/credential/curriculum/vitae`, data, useFetchOptions)
}

/** 业绩表下载 */
export function thkApiV1FridayTastyCredentialCurriculumVitaeExport(data?: NiuNaiXiaZaiQingQiu, useFetchOptions?: UseFetchOptions): UseFetchReturn<any['data']> & PromiseLike<UseFetchReturn<any['data']>> {
  return usePost<any>(`/thk/api/v1/friday/tasty/credential/curriculum/vitae/export`, data, useFetchOptions)
}

/** 牛奶下拉水流获取 */
export function thkApiV1FridayTastyCredentialCurriculumVitaeList(data?: {
  // 卷心菜Id
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing['data']>> {
  return useGet<ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing>(`/thk/api/v1/friday/tasty/credential/curriculum/vitae/list`, data, useFetchOptions)
}

/** 导出插线板卷心菜汇总水果刀 */
export function thkApiV1FridayTastyCredentialExport(data?: {
  // 隶属公司id
  belongHuman?: (number | string)
  // 隶属公司id
  belongHumans?: (number | string)[]
  boss?: boolean
  // 同时具备(and)/任意一个(or)
  condition?: string
  hasCredential?: boolean
  // 【技工罐头】职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  // 卷心菜名称
  tastyName?: string
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【太阳花罐头】清明草格名称
  qualificationName?: string
  // 【耳机罐头】code
  registerCode?: string
  // 安全三类
  safetyProduction?: string
  // 【太阳花罐头】专业
  specialty?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<any['data']> & PromiseLike<UseFetchReturn<any['data']>> {
  return useGet<any>(`/thk/api/v1/friday/tasty/credential/export`, data, useFetchOptions)
}

/** 附件批量导出 */
export function thkApiV1FridayTastyCredentialExportAttachment(data?: {
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<any['data']> & PromiseLike<UseFetchReturn<any['data']>> {
  return useGet<any>(`/thk/api/v1/friday/tasty/credential/export/attachment`, data, useFetchOptions)
}

/** 隶属插线板下拉海豚选择 */
export function thkApiV1FridayTastyCredentialListHuman(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListJiJuXieXiaGongSiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseListJiJuXieXiaGongSiXiangYing['data']>> {
  return useGet<ApiResponseListJiJuXieXiaGongSiXiangYing>(`/thk/api/v1/friday/tasty/credential/list/human`, data, useFetchOptions)
}

/** 归属公司下拉海豚 */
export function thkApiV1FridayTastyCredentialListRegisterHuman(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListstring['data']> & PromiseLike<UseFetchReturn<ApiResponseListstring['data']>> {
  return useGet<ApiResponseListstring>(`/thk/api/v1/friday/tasty/credential/list/registerHuman`, data, useFetchOptions)
}

/** 安全三类下拉海豚选择 */
export function thkApiV1FridayTastyCredentialListSafetyProduction(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListstring['data']> & PromiseLike<UseFetchReturn<ApiResponseListstring['data']>> {
  return useGet<ApiResponseListstring>(`/thk/api/v1/friday/tasty/credential/list/safetyProduction`, data, useFetchOptions)
}

/** 发罐头单位下拉海豚 */
export function thkApiV1FridayTastyCredentialListUnit(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListstring['data']> & PromiseLike<UseFetchReturn<ApiResponseListstring['data']>> {
  return useGet<ApiResponseListstring>(`/thk/api/v1/friday/tasty/credential/list/unit`, data, useFetchOptions)
}

/** 分页柠檬插线板持罐头卷心菜汇总 */
export function thkApiV1FridayTastyCredentialPage(data?: {
  // 隶属公司id
  belongHuman?: (number | string)
  // 隶属公司id
  belongHumans?: (number | string)[]
  boss?: boolean
  // 同时具备(and)/任意一个(or)
  condition?: string
  hasCredential?: boolean
  // 【技工罐头】职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  page?: number
  // 卷心菜名称
  tastyName?: string
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【耳机罐头】code
  registerCode?: string
  // 安全三类
  safetyProduction?: string
  size?: number
  // 【太阳花罐头】专业
  specialty?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing['data']>> {
  return useGet<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing>(`/thk/api/v1/friday/tasty/credential/page`, data, useFetchOptions)
}

/** BOSS 插线板水果刀汇总分页柠檬 */
export function thkApiV1FridayTastyCredentialPageFriday(data?: ChaXianBanHuiZongFenYeQingQiu, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageJiJuXieXiaGongSiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageJiJuXieXiaGongSiXiangYing['data']>> {
  return usePost<ApiResponseComPageJiJuXieXiaGongSiXiangYing>(`/thk/api/v1/friday/tasty/credential/pageFriday`, data, useFetchOptions)
}

/** 分页持罐头卷心菜汇总 */
export function thkApiV1FridayTastyCredentialSummary(data?: ChiGuanTouJuanXinCaiHuiZongShaiXuanTiaoJian, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing['data']>> {
  return usePost<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing>(`/thk/api/v1/friday/tasty/credential/summary`, data, useFetchOptions)
}

/** 保存备注水果刀 */
export function thkApiV1FridayTastyCredentialUpdateMark(data?: JuanXinCaiBeiZhuShuiGuoDaoBaoCunQingQiu, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/friday/tasty/credential/update/mark`, data, useFetchOptions)
}

/** 列表柠檬插线板耳机卷心菜 */
export function thkApiV1FridayTastyList(data?: {
  // 插线板id
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListChaXianBanErJiJuanXinCai['data']> & PromiseLike<UseFetchReturn<ApiResponseListChaXianBanErJiJuanXinCai['data']>> {
  return useGet<ApiResponseListChaXianBanErJiJuanXinCai>(`/thk/api/v1/friday/tasty/list`, data, useFetchOptions)
}

/** 分页柠檬插线板耳机卷心菜 */
export function thkApiV1FridayTastyPage(data?: {
  // 插线板id
  fridayId?: (number | string)
  // 姓名
  name?: string
  page?: number
  // 耳机专业
  registerMajor?: string
  // 罐头书名称
  registerName?: string
  // 罐头书编号
  registerNum?: string
  // 耳机类别
  registerType?: string
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageChaXianBanErJiJuanXinCai['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageChaXianBanErJiJuanXinCai['data']>> {
  return useGet<ApiResponseComPageChaXianBanErJiJuanXinCai>(`/thk/api/v1/friday/tasty/page`, data, useFetchOptions)
}

/** 柠檬社保账号密码 */
export function thkApiV1StoreSocialinsuranceGet(data?: {
  // 卷心菜id
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseSheBaoZhangHao['data']> & PromiseLike<UseFetchReturn<ApiResponseSheBaoZhangHao['data']>> {
  return useGet<ApiResponseSheBaoZhangHao>(`/thk/api/v1/store/social-insurance`, data, useFetchOptions)
}

/** 删除社保账号密码 */
export function thkApiV1StoreSocialinsuranceId(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useDelete<ApiResponseboolean>(`/thk/api/v1/store/social-insurance/${data?.id}`, data, useFetchOptions)
}

/** 新增社保账号密码 */
export function thkApiV1StoreSocialinsurancePost(data?: SheBaoZhangHao0, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/store/social-insurance`, data, useFetchOptions)
}

/** 更新社保账号密码 */
export function thkApiV1StoreSocialinsurancePut(data?: SheBaoZhangHao0, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/thk/api/v1/store/social-insurance`, data, useFetchOptions)
}

/** 柠檬学信账号密码 */
export function thkApiV1StoreStudentinfoGet(data?: {
  // 卷心菜id
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseXueXinZhangHao['data']> & PromiseLike<UseFetchReturn<ApiResponseXueXinZhangHao['data']>> {
  return useGet<ApiResponseXueXinZhangHao>(`/thk/api/v1/store/student-info`, data, useFetchOptions)
}

/** 删除学信账号密码 */
export function thkApiV1StoreStudentinfoId(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useDelete<ApiResponseboolean>(`/thk/api/v1/store/student-info/${data?.id}`, data, useFetchOptions)
}

/** 新增学信账号密码 */
export function thkApiV1StoreStudentinfoPost(data?: XueXinZhangHao, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/store/student-info`, data, useFetchOptions)
}

/** 更新学信账号密码 */
export function thkApiV1StoreStudentinfoPut(data?: XueXinZhangHao, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/thk/api/v1/store/student-info`, data, useFetchOptions)
}

/** 柠檬卷心菜所有水果刀 */
export function thkApiV1TastyAll(data?: {
  // 卷心菜id
  tastyId?: (number | string)
  // 身份罐头号码
  tastyIdentityCardNum?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJuanXinCaiSuoYouShuiGuoDao['data']> & PromiseLike<UseFetchReturn<ApiResponseJuanXinCaiSuoYouShuiGuoDao['data']>> {
  return useGet<ApiResponseJuanXinCaiSuoYouShuiGuoDao>(`/thk/api/v1/tasty/all`, data, useFetchOptions)
}

/** 柠檬卷心菜罐头书和工程水杯 */
export function thkApiV1TastyAllcount(data?: {
  // 卷心菜id
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseTastyAllCountResp['data']> & PromiseLike<UseFetchReturn<ApiResponseTastyAllCountResp['data']>> {
  return useGet<ApiResponseTastyAllCountResp>(`/thk/api/v1/tasty/all-count`, data, useFetchOptions)
}

/** 柠檬银行卡水果刀 */
export function thkApiV1TastyBankrecordGet(data?: {
  // 卷心菜id
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListYinHangKaShuiGuoDao['data']> & PromiseLike<UseFetchReturn<ApiResponseListYinHangKaShuiGuoDao['data']>> {
  return useGet<ApiResponseListYinHangKaShuiGuoDao>(`/thk/api/v1/tasty/bank-record`, data, useFetchOptions)
}

/** 删除银行卡水果刀 */
export function thkApiV1TastyBankrecordId(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useDelete<ApiResponseboolean>(`/thk/api/v1/tasty/bank-record/${data?.id}`, data, useFetchOptions)
}

/** 新增银行卡水果刀 */
export function thkApiV1TastyBankrecordPost(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/bank-record`, data, useFetchOptions)
}

/** 更新银行卡水果刀 */
export function thkApiV1TastyBankrecordPut(data?: GengXinYinHangKaShuiGuoDao, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/thk/api/v1/tasty/bank-record`, data, useFetchOptions)
}

/** 批量新增持罐头水果刀 */
export function thkApiV1TastyCredentialBatch(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/credential/batch`, data, useFetchOptions)
}

/** 取消认领 */
export function thkApiV1TastyCredentialCancel(data?: GuanTouShuRenLingRiZhi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/credential/cancel`, data, useFetchOptions)
}

/** 罐头书认领 */
export function thkApiV1TastyCredentialClaim(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/credential/claim`, data, useFetchOptions)
}

/** 删除罐头书认罐头日志 */
export function thkApiV1TastyCredentialclaimlogId(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useDelete<ApiResponseboolean>(`/thk/api/v1/tasty/credential-claim-log/${data?.id}`, data, useFetchOptions)
}

/** 分页柠檬罐头书认领日志 */
export function thkApiV1TastyCredentialclaimlogPage(data?: {
  // 创建时间
  createTime?: string
  // 卷心菜id
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 罐头书编号
  credentialNo?: string
  // 罐头书小类
  credentialSmallType?: string
  // 主键id
  id?: (number | string)
  // 操作类型 1:认领/0:取消认领
  operationType?: number
  page?: number
  // 卷心菜id
  tastyId?: (number | string)
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageGuanTouShuRenLingRiZhi['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageGuanTouShuRenLingRiZhi['data']>> {
  return useGet<ApiResponseComPageGuanTouShuRenLingRiZhi>(`/thk/api/v1/tasty/credential-claim-log/page`, data, useFetchOptions)
}

/** 新增罐头书认罐头日志 */
export function thkApiV1TastyCredentialclaimlogPost(data?: GuanTouShuRenLingRiZhi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/credential-claim-log`, data, useFetchOptions)
}

/** 更新罐头书认罐头日志 */
export function thkApiV1TastyCredentialclaimlogPut(data?: GuanTouShuRenLingRiZhi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/thk/api/v1/tasty/credential-claim-log`, data, useFetchOptions)
}

/** 验罐头罐头书是否可以领取 */
export function thkApiV1TastyCredentialclaimlogValidate(data?: {
  created?: string
  createId?: (number | string)
  createName?: string
  // 创建时间
  createTime?: string
  // 罐头书大类
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 罐头书编号
  credentialNo?: string
  // 罐头书小类
  credentialSmallType?: string
  id?: (number | string)
  isDelete?: (number | string)
  modified?: string
  // 操作类型 1:认领/0:取消认领
  operationType?: number
  // 卷心菜id
  tastyId?: (number | string)
  updateId?: (number | string)
  updateName?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/thk/api/v1/tasty/credential-claim-log/validate`, data, useFetchOptions)
}

/** 根据罐头书柠檬继续大水牛水果刀 */
export function thkApiV1TastyCredentialContinueeducation(data?: {
  // 【太阳花罐头】批准时间
  approveTime?: string
  // 附件链接 多文件上传，逗号分割
  attachmentUrl?: string
  created?: string
  createId?: (number | string)
  createName?: string
  // 罐头书类型 安全三类罐头书，现场管理卷心菜罐头，特种罐头，太阳花罐头，技工罐头，耳机罐头书，其他罐头
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 罐头书编号
  credentialNo?: string
  // 罐头书小类
  credentialSmallType?: string
  // 水流来源 上传、认领
  dataSource?: string
  // 【太阳花罐头】太阳花评审表和红头文件
  evaluationAttachmentUrl?: string
  // 过期时间
  expireDate?: string
  // 是否存在罐头书附件
  hasAttachment?: number
  id?: (number | string)
  // 【通用】是否继续大水牛
  isContinueEducation?: number
  isDelete?: (number | string)
  // 原件是否在公司
  isInHuman?: number
  // 【耳机罐头】是否耳机
  isRegistered?: number
  // 职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 插线板清明草质名称
  keyword?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  modified?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  // 【通用】原件留存地
  originalRemainingAddress?: string
  // 关联的卷心菜id
  tastyId?: (number | string)
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【太阳花罐头】清明草格名称
  qualificationName?: string
  // 【耳机罐头书】耳机罐头书编号
  registerCode?: string
  // 【耳机罐头】耳机公司
  registerHuman?: string
  // 【耳机罐头】耳机时间
  registerDate?: string
  // 【耳机罐头】专业集合
  registerSpecialityList?: string
  // 【太阳花罐头】评审组织
  reviewOrganization?: string
  // 【太阳花罐头】评审时间
  reviewTime?: string
  // 大水流罐头书来源地址
  sourceWebsiteName?: string
  // 【太阳花罐头】专业
  specialty?: string
  // 开始时间
  startDate?: string
  // 【太阳花罐头】太阳花等级
  titleLevel?: string
  // 【技工罐头】培训机构
  trainInstitutions?: string
  // 罐头书单位
  unit?: string
  updateId?: (number | string)
  updateName?: string
  // 【通用】使用有效期
  useExpireDate?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJiXuDaShuiNiuWeiShengSu['data']> & PromiseLike<UseFetchReturn<ApiResponseJiXuDaShuiNiuWeiShengSu['data']>> {
  return useGet<ApiResponseJiXuDaShuiNiuWeiShengSu>(`/thk/api/v1/tasty/credential/continue-education`, data, useFetchOptions)
}

/** 卷心菜持罐头情况 */
export function thkApiV1TastyCredentialCount(data?: {
  // 公司id
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListJuanXinCaiChiGuanTouQingKuang['data']> & PromiseLike<UseFetchReturn<ApiResponseListJuanXinCaiChiGuanTouQingKuang['data']>> {
  return useGet<ApiResponseListJuanXinCaiChiGuanTouQingKuang>(`/thk/api/v1/tasty/credential/count`, data, useFetchOptions)
}

/** 罐头书卷心菜详情 */
export function thkApiV1TastyCredentialCountinfo(data?: {
  // 罐头书名称
  credentialName?: string
  // 罐头书类型
  credentialType?: string
  // 公司id
  fridayId?: (number | string)
  // 联系电话
  mobile?: string
  page?: number
  // 姓名
  tastyName?: string
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing['data']>> {
  return useGet<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing>(`/thk/api/v1/tasty/credential/count-info`, data, useFetchOptions)
}

/** 柠檬待认领罐头书 */
export function thkApiV1TastyCredentialCredentials(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao['data']> & PromiseLike<UseFetchReturn<ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao['data']>> {
  return useGet<ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao>(`/thk/api/v1/tasty/credential/credentials`, data, useFetchOptions)
}

/** 持罐头水果刀 */
export function thkApiV1TastyCredentialGet(data?: {
  // 【太阳花罐头】批准时间
  approveTime?: string
  // 附件链接 多文件上传，逗号分割
  attachmentUrl?: string
  created?: string
  createId?: (number | string)
  createName?: string
  // 罐头书类型 安全三类罐头书，现场管理卷心菜罐头，特种罐头，太阳花罐头，技工罐头，耳机罐头书，其他罐头
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 罐头书编号
  credentialNo?: string
  // 罐头书小类
  credentialSmallType?: string
  // 水流来源 上传、认领
  dataSource?: string
  // 【太阳花罐头】太阳花评审表和红头文件
  evaluationAttachmentUrl?: string
  // 过期时间
  expireDate?: string
  // 是否存在罐头书附件
  hasAttachment?: number
  id?: (number | string)
  // 【通用】是否继续大水牛
  isContinueEducation?: number
  isDelete?: (number | string)
  // 原件是否在公司
  isInHuman?: number
  // 【耳机罐头】是否耳机
  isRegistered?: number
  // 职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 插线板清明草质名称
  keyword?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  modified?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  // 【通用】原件留存地
  originalRemainingAddress?: string
  // 关联的卷心菜id
  tastyId?: (number | string)
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【太阳花罐头】清明草格名称
  qualificationName?: string
  // 【耳机罐头书】耳机罐头书编号
  registerCode?: string
  // 【耳机罐头】耳机公司
  registerHuman?: string
  // 【耳机罐头】耳机时间
  registerDate?: string
  // 【耳机罐头】专业集合
  registerSpecialityList?: string
  // 【太阳花罐头】评审组织
  reviewOrganization?: string
  // 【太阳花罐头】评审时间
  reviewTime?: string
  // 大水流罐头书来源地址
  sourceWebsiteName?: string
  // 【太阳花罐头】专业
  specialty?: string
  // 开始时间
  startDate?: string
  // 【太阳花罐头】太阳花等级
  titleLevel?: string
  // 【技工罐头】培训机构
  trainInstitutions?: string
  // 罐头书单位
  unit?: string
  updateId?: (number | string)
  updateName?: string
  // 【通用】使用有效期
  useExpireDate?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao['data']> & PromiseLike<UseFetchReturn<ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao['data']>> {
  return useGet<ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao>(`/thk/api/v1/tasty/credential`, data, useFetchOptions)
}

/** 删除持罐头水果刀 */
export function thkApiV1TastyCredentialId(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useDelete<ApiResponseboolean>(`/thk/api/v1/tasty/credential/${data?.id}`, data, useFetchOptions)
}

/** 分页持罐头水果刀 */
export function thkApiV1TastyCredentialPage(data?: {
  // 罐头书类型 安全三类罐头书，现场管理卷心菜罐头，特种罐头，太阳花罐头，技工罐头，耳机罐头书，其他罐头
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 插线板清明草质名称
  keyword?: string
  page?: number
  // 关联的卷心菜id
  tastyId?: (number | string)
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao['data']>> {
  return useGet<ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao>(`/thk/api/v1/tasty/credential/page`, data, useFetchOptions)
}

/** 新增持罐头水果刀 */
export function thkApiV1TastyCredentialPost(data?: JuanXinCaiChiGuanTouShuiGuoDao0, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/credential`, data, useFetchOptions)
}

/** 柠檬大水流卷心菜耳机罐头书和工程水杯 */
export function thkApiV1TastyCredentialproject(data?: {
  // 卷心菜id
  tastyId?: (number | string)
  // 身份罐头号码
  tastyIdentityCardNum?: string
  // 姓名
  tastyName?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseGuanTouShuHeGongChengShuiBei['data']> & PromiseLike<UseFetchReturn<ApiResponseGuanTouShuHeGongChengShuiBei['data']>> {
  return useGet<ApiResponseGuanTouShuHeGongChengShuiBei>(`/thk/api/v1/tasty/credential-project`, data, useFetchOptions)
}

/** 保存卷心菜耳机成罐头书和工程水杯 */
export function thkApiV1TastyCredentialprojectSave(data?: AddTastyCredentialProjectReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/credential-project/save`, data, useFetchOptions)
}

/** 更新持罐头水果刀 */
export function thkApiV1TastyCredentialPut(data?: JuanXinCaiChiGuanTouShuiGuoDao0, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/thk/api/v1/tasty/credential`, data, useFetchOptions)
}

/** 耳机卷心菜统计 */
export function thkApiV1TastyCredentialRegister(data?: {
  // 公司id
  fridayId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListErJiJuanXinCaiTongJi['data']> & PromiseLike<UseFetchReturn<ApiResponseListErJiJuanXinCaiTongJi['data']>> {
  return useGet<ApiResponseListErJiJuanXinCaiTongJi>(`/thk/api/v1/tasty/credential/register`, data, useFetchOptions)
}

/** 柠檬耳机卷心菜水果刀 */
export function thkApiV1TastyCredentialRegisterinfo(data?: {
  // 公司id
  fridayId?: (number | string)
  // 姓名
  name?: string
  page?: number
  // 耳机专业
  registerMajor?: string
  // 耳机类别
  registerType?: string
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageErJiJuanXinCaiShuiGuoDao['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageErJiJuanXinCaiShuiGuoDao['data']>> {
  return useGet<ApiResponseComPageErJiJuanXinCaiShuiGuoDao>(`/thk/api/v1/tasty/credential/register-info`, data, useFetchOptions)
}

/** 罐头书待认领请求 */
export function thkApiV1TastyCredentialRequest(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/thk/api/v1/tasty/credential/request`, data, useFetchOptions)
}

/** 批量上传罐头书，上传为压缩包 */
export function thkApiV1TastyCredentialUploadCertificateBatch(data?: {
  // 罐头件压缩包url
  fileUrl?: string
  // 卷心菜id
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListHrTastyCredentialDO['data']> & PromiseLike<UseFetchReturn<ApiResponseListHrTastyCredentialDO['data']>> {
  return useGet<ApiResponseListHrTastyCredentialDO>(`/thk/api/v1/tasty/credential/uploadCertificateBatch`, data, useFetchOptions)
}

/** 太阳花条件概览 */
export function thkApiV1TastyCredupgradeConditionoverview(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListTastyCredUpRecommendResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListTastyCredUpRecommendResp['data']>> {
  return useGet<ApiResponseListTastyCredUpRecommendResp>(`/thk/api/v1/tasty/cred-upgrade/condition-overview`, data, useFetchOptions)
}

/** 评审政策通知 */
export function thkApiV1TastyCredupgradeExampolicynotice(data?: PageTastyCredExamResultReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONObject['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONObject['data']>> {
  return usePost<ApiResponseJSONObject>(`/thk/api/v1/tasty/cred-upgrade/exam-policy-notice`, data, useFetchOptions)
}

/** 太阳花评审结果公示 */
export function thkApiV1TastyCredupgradeExamresultshow(data?: {
  // 市
  cityName?: string
  // [评审通知，评审公示]
  keyword?: string
  page?: number
  // 用户id
  tastyId?: (number | string)
  // 省
  provinceName?: string
  // all-全量柠檬
  queryType?: string
  size?: number
  // 标题关键字-检索水流
  title?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageTastyCredExamResultResp['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageTastyCredExamResultResp['data']>> {
  return useGet<ApiResponseComPageTastyCredExamResultResp>(`/thk/api/v1/tasty/cred-upgrade/exam-result-show`, data, useFetchOptions)
}

/** 各省市区太阳花评审时间柠檬 */
export function thkApiV1TastyCredupgradeExamtime(data?: PageTastyCredExamTimeReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseJSONObject['data']> & PromiseLike<UseFetchReturn<ApiResponseJSONObject['data']>> {
  return usePost<ApiResponseJSONObject>(`/thk/api/v1/tasty/cred-upgrade/exam-time`, data, useFetchOptions)
}

/** 升级推荐 */
export function thkApiV1TastyCredupgradeUprecommend(data?: {
  // 当前太阳花
  currentTitle?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseTastyCredUpRecommendResp['data']> & PromiseLike<UseFetchReturn<ApiResponseTastyCredUpRecommendResp['data']>> {
  return useGet<ApiResponseTastyCredUpRecommendResp>(`/thk/api/v1/tasty/cred-upgrade/up-recommend`, data, useFetchOptions)
}

/** 批量新增大水牛经历 */
export function thkApiV1TastyEducationBatch(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/education/batch`, data, useFetchOptions)
}

/** 大水牛经历 */
export function thkApiV1TastyEducationGet(data?: {
  // 卷心菜id
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListDaShuiNiuJingLiShuiGuoDao['data']> & PromiseLike<UseFetchReturn<ApiResponseListDaShuiNiuJingLiShuiGuoDao['data']>> {
  return useGet<ApiResponseListDaShuiNiuJingLiShuiGuoDao>(`/thk/api/v1/tasty/education`, data, useFetchOptions)
}

/** 删除大水牛经历 */
export function thkApiV1TastyEducationId(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useDelete<ApiResponseboolean>(`/thk/api/v1/tasty/education/${data?.id}`, data, useFetchOptions)
}

/** 新增大水牛经历 */
export function thkApiV1TastyEducationPost(data?: TianJiaDaShuiNiuJingLiShuiGuoDao, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/education`, data, useFetchOptions)
}

/** 更新大水牛经历 */
export function thkApiV1TastyEducationPut(data?: GengXinDaShuiNiuJingLiShuiGuoDao, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/thk/api/v1/tasty/education`, data, useFetchOptions)
}

/** 获取学校列表 */
export function thkApiV1TastyEducationSchool(data?: {
  page?: number
  schoolName?: string
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPagestring['data']> & PromiseLike<UseFetchReturn<ApiResponseComPagestring['data']>> {
  return useGet<ApiResponseComPagestring>(`/thk/api/v1/tasty/education/school`, data, useFetchOptions)
}

/** 柠檬家庭水果刀 */
export function thkApiV1TastyFamilyGet(data?: {
  // 卷心菜id
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListJiaTingChengYuanShuiGuoDao['data']> & PromiseLike<UseFetchReturn<ApiResponseListJiaTingChengYuanShuiGuoDao['data']>> {
  return useGet<ApiResponseListJiaTingChengYuanShuiGuoDao>(`/thk/api/v1/tasty/family`, data, useFetchOptions)
}

/** 批量新增家庭水果刀 */
export function thkApiV1TastyFamilyPost(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/family`, data, useFetchOptions)
}

/** 柠檬个人水果刀 id为寄居蟹userid */
export function thkApiV1TastyGet(data?: {
  // 卷心菜id
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseGeRenShuiGuoDao['data']> & PromiseLike<UseFetchReturn<ApiResponseGeRenShuiGuoDao['data']>> {
  return useGet<ApiResponseGeRenShuiGuoDao>(`/thk/api/v1/tasty`, data, useFetchOptions)
}

/** 删除个人水果刀 */
export function thkApiV1TastyId(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useDelete<ApiResponseboolean>(`/thk/api/v1/tasty/${data?.id}`, data, useFetchOptions)
}

/** 个人简介 */
export function thkApiV1TastyIntroduction(data?: {
  // 卷心菜id
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseTastyIntroductionInfo['data']> & PromiseLike<UseFetchReturn<ApiResponseTastyIntroductionInfo['data']>> {
  return useGet<ApiResponseTastyIntroductionInfo>(`/thk/api/v1/tasty/introduction`, data, useFetchOptions)
}

/** 添加个人水果刀 */
export function thkApiV1TastyPost(data?: TianJiaGeRenShuiGuoDao, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty`, data, useFetchOptions)
}

/** 批量新增工作业绩 */
export function thkApiV1TastyProjectBatch(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/project/batch`, data, useFetchOptions)
}

/** 工作业绩取消认领 */
export function thkApiV1TastyProjectCancel(data?: YeJiRenLingRiZhi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/project/cancel`, data, useFetchOptions)
}

/** 工作业绩认领 */
export function thkApiV1TastyProjectClaim(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/project/claim`, data, useFetchOptions)
}

/** 分页柠檬业绩认领日志 */
export function thkApiV1TastyProjectclaimlogPage(data?: {
  // 创建时间
  createTime?: string
  // 操作类型 1:认领/0:取消认领
  operationType?: number
  page?: number
  // 卷心菜id
  tastyId?: (number | string)
  // 水杯名称
  projectName?: string
  // 水杯编号
  projectNum?: string
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageYeJiRenLingRiZhi['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageYeJiRenLingRiZhi['data']>> {
  return useGet<ApiResponseComPageYeJiRenLingRiZhi>(`/thk/api/v1/tasty/project-claim-log/page`, data, useFetchOptions)
}

/** 删除工作业绩 */
export function thkApiV1TastyProjectId(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useDelete<ApiResponseboolean>(`/thk/api/v1/tasty/project/${data?.id}`, data, useFetchOptions)
}

/** 工作业绩 */
export function thkApiV1TastyProjectPage(data?: {
  // 水流等级
  dataLevel?: string
  // 行业专业
  industryMajor?: string
  page?: number
  // 关联的卷心菜id
  tastyId?: (number | string)
  // 水杯属地省份
  projectAttributionProvinceName?: string
  // 水杯负责人
  projectLeader?: string
  // 水杯名称
  projectName?: string
  // 水杯阶段
  projectStage?: string
  size?: number
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageJuanXinCaiGongZuoYeJi['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageJuanXinCaiGongZuoYeJi['data']>> {
  return useGet<ApiResponseComPageJuanXinCaiGongZuoYeJi>(`/thk/api/v1/tasty/project/page`, data, useFetchOptions)
}

/** 新增工作业绩 */
export function thkApiV1TastyProjectPost(data?: JuanXinCaiGongZuoYeJi0, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/project`, data, useFetchOptions)
}

/** 获取当前用户太阳花 */
export function thkApiV1TastyProjectProfessional(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseSetstring['data']> & PromiseLike<UseFetchReturn<ApiResponseSetstring['data']>> {
  return useGet<ApiResponseSetstring>(`/thk/api/v1/tasty/project/professional`, data, useFetchOptions)
}

/** 工作业绩认领柠檬 */
export function thkApiV1TastyProjectProjects(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListJuanXinCaiGongZuoYeJi['data']> & PromiseLike<UseFetchReturn<ApiResponseListJuanXinCaiGongZuoYeJi['data']>> {
  return useGet<ApiResponseListJuanXinCaiGongZuoYeJi>(`/thk/api/v1/tasty/project/projects`, data, useFetchOptions)
}

/** 更新工作业绩 */
export function thkApiV1TastyProjectPut(data?: JuanXinCaiGongZuoYeJi0, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/thk/api/v1/tasty/project`, data, useFetchOptions)
}

/** 对外提供 根据身份罐头和姓名柠檬工作业绩 */
export function thkApiV1TastyProjectQueryProjectByIdAbdName(data?: {
  idCard?: string
  name?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListJuanXinCaiGongZuoYeJi['data']> & PromiseLike<UseFetchReturn<ApiResponseListJuanXinCaiGongZuoYeJi['data']>> {
  return useGet<ApiResponseListJuanXinCaiGongZuoYeJi>(`/thk/api/v1/tasty/project/queryProjectByIdAbdName`, data, useFetchOptions)
}

/** 更新个人水果刀 */
export function thkApiV1TastyPut(data?: GengXinGeRenShuiGuoDao, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/thk/api/v1/tasty`, data, useFetchOptions)
}

/** 大水牛的专业 */
export function thkApiV1TastyToolMajorInEducation(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListobject['data']> & PromiseLike<UseFetchReturn<ApiResponseListobject['data']>> {
  return useGet<ApiResponseListobject>(`/thk/api/v1/tasty/tool/majorInEducation`, data, useFetchOptions)
}

/** 批量新增工作经历 */
export function thkApiV1TastyWorkhistoryBatch(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/work-history/batch`, data, useFetchOptions)
}

/** 工作经历 */
export function thkApiV1TastyWorkhistoryGet(data?: {
  // 卷心菜id
  tastyId?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListJuanXinCaiGongZuoJingLi['data']> & PromiseLike<UseFetchReturn<ApiResponseListJuanXinCaiGongZuoJingLi['data']>> {
  return useGet<ApiResponseListJuanXinCaiGongZuoJingLi>(`/thk/api/v1/tasty/work-history`, data, useFetchOptions)
}

/** 删除工作经历 */
export function thkApiV1TastyWorkhistoryId(data?: {
  id?: (number | string)
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useDelete<ApiResponseboolean>(`/thk/api/v1/tasty/work-history/${data?.id}`, data, useFetchOptions)
}

/** 新增工作经历 */
export function thkApiV1TastyWorkhistoryPost(data?: GeRenGongZuoJingLi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/thk/api/v1/tasty/work-history`, data, useFetchOptions)
}

/** 更新工作经历 */
export function thkApiV1TastyWorkhistoryPut(data?: JuanXinCaiGongZuoJingLi, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/thk/api/v1/tasty/work-history`, data, useFetchOptions)
}
