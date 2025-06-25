import type { UseFetchOptions } from '@vueuse/core'
import type { AddProcessReqM, DeleteProcessReqM, EmptyReqM, GetProcessInfoListReqM, GetProcessInfoListRespMListResponseModel, ModifyProcessReqM, ObjectResponseModel, ProcessBelongRespMListResponseModel, ProcessDefaultStepReqM, ProcessListReqM, ProcessListRespMListResponseModel, ProcessStepSimpleInfoListResponseModel, SetTimeOutReqM, StringResponseModel } from './_interfaces'

/** 添加心法流程 (Auth) */
export function processAddOne(data?: AddProcessReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<StringResponseModel['data']> & PromiseLike<UseFetchReturn<StringResponseModel['data']>> {
  return usePost<StringResponseModel>(`/api/Process/AddOne`, data, useFetchOptions)
}

/** 删除心法流程 (Auth) */
export function processDeleteOne(data?: DeleteProcessReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return useDelete<ObjectResponseModel>(`/api/Process/DeleteOne`, data, useFetchOptions)
}

/** 功法流程列表查询 (Auth) */
export function processGetList(data?: ProcessListReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ProcessListRespMListResponseModel['data']> & PromiseLike<UseFetchReturn<ProcessListRespMListResponseModel['data']>> {
  return usePost<ProcessListRespMListResponseModel>(`/api/Process/GetList`, data, useFetchOptions)
}

/** 超时配置界面，查询某个流程所属的所有流程 (Auth) */
export function processGetListForTimeOutConfig(data?: GetProcessInfoListReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<GetProcessInfoListRespMListResponseModel['data']> & PromiseLike<UseFetchReturn<GetProcessInfoListRespMListResponseModel['data']>> {
  return usePost<GetProcessInfoListRespMListResponseModel>(`/api/Process/GetListForTimeOutConfig`, data, useFetchOptions)
}

/** 获取流程归属列表 (Auth) */
export function processGetProcessBelongList(data?: EmptyReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ProcessBelongRespMListResponseModel['data']> & PromiseLike<UseFetchReturn<ProcessBelongRespMListResponseModel['data']>> {
  return usePost<ProcessBelongRespMListResponseModel>(`/api/Process/GetProcessBelongList`, data, useFetchOptions)
}

/** 获取流程默认步骤列表 (Auth) */
export function processGetProcessDefaultStepList(data?: ProcessDefaultStepReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ProcessStepSimpleInfoListResponseModel['data']> & PromiseLike<UseFetchReturn<ProcessStepSimpleInfoListResponseModel['data']>> {
  return usePost<ProcessStepSimpleInfoListResponseModel>(`/api/Process/GetProcessDefaultStepList`, data, useFetchOptions)
}

/** 获取所有的可能的步骤集合 (Auth) */
export function processGetProcessStepList(data?: EmptyReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ProcessStepSimpleInfoListResponseModel['data']> & PromiseLike<UseFetchReturn<ProcessStepSimpleInfoListResponseModel['data']>> {
  return usePost<ProcessStepSimpleInfoListResponseModel>(`/api/Process/GetProcessStepList`, data, useFetchOptions)
}

/** 修改心法流程 (Auth) */
export function processModifyOne(data?: ModifyProcessReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/Process/ModifyOne`, data, useFetchOptions)
}

/** 设置心法流程超时配置 (Auth) */
export function processSetTimeOut(data?: SetTimeOutReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/Process/SetTimeOut`, data, useFetchOptions)
}
