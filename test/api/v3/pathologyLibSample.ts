import type { UseFetchOptions } from '@vueuse/core'
import type { AddSampleReqM, DelModel, ModifySampleReqM, ObjectResponseModel, PathologyLibSampleReqM, PathologyLibSampleRespMListResponseModel, StringResponseModel } from './_interfaces'

/** 添加 (Auth) */
export function pathologyLibSampleAddOne(data?: AddSampleReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<StringResponseModel['data']> & PromiseLike<UseFetchReturn<StringResponseModel['data']>> {
  return usePost<StringResponseModel>(`/api/PathologyLibSample/AddOne`, data, useFetchOptions)
}

/** 删除 (Auth) */
export function pathologyLibSampleDeleteOne(data?: DelModel, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return useDelete<ObjectResponseModel>(`/api/PathologyLibSample/DeleteOne`, data, useFetchOptions)
}

/** 获取功法库样本树 常规：normal 细胞：cell 冰冻：frozen (Auth) */
export function pathologyLibSampleGetPathologyLibSampleTree(data?: PathologyLibSampleReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<PathologyLibSampleRespMListResponseModel['data']> & PromiseLike<UseFetchReturn<PathologyLibSampleRespMListResponseModel['data']>> {
  return usePost<PathologyLibSampleRespMListResponseModel>(`/api/PathologyLibSample/GetPathologyLibSampleTree`, data, useFetchOptions)
}

/** 修改 (Auth) */
export function pathologyLibSampleModifyOne(data?: ModifySampleReqM, useFetchOptions?: UseFetchOptions): UseFetchReturn<ObjectResponseModel['data']> & PromiseLike<UseFetchReturn<ObjectResponseModel['data']>> {
  return usePut<ObjectResponseModel>(`/api/PathologyLibSample/ModifyOne`, data, useFetchOptions)
}
