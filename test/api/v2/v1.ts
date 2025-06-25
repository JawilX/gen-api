import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseboolean, ApiResponseComPageGuanLianShenHeXinXi, ApiResponseShenHeTongJiHuanCunSanShiMiao, AuditRelationTotalReq, BiXieDao, DoorAuditReq } from './_interfaces'

/** 审核-执行审核 */
export function v1AuditRelation(data?: BiXieDao & {
  // 审核结果-auditStatus
  auditStatusEnum?: string
  // 审核类型-auditType
  typeEnum?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePut<ApiResponseboolean>(`/api/v1/audit/relation`, data, useFetchOptions)
}

/** 关联审核甬道 */
export function v1AuditRelationPage(data?: DoorAuditReq & {
  // 审核分类-auditClassification-已审核-未审核
  auditClassificationEnum?: string
}, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageGuanLianShenHeXinXi['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageGuanLianShenHeXinXi['data']>> {
  return usePost<ApiResponseComPageGuanLianShenHeXinXi>(`/api/v1/audit/relation/page`, data, useFetchOptions)
}

/** 关联审核-统计 */
export function v1AuditRelationTotal(data?: AuditRelationTotalReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseShenHeTongJiHuanCunSanShiMiao['data']> & PromiseLike<UseFetchReturn<ApiResponseShenHeTongJiHuanCunSanShiMiao['data']>> {
  return usePost<ApiResponseShenHeTongJiHuanCunSanShiMiao>(`/api/v1/audit/relation/total`, data, useFetchOptions)
}
