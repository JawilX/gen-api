import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseboolean, ApiResponseComPageZhiXieChangChuXing, ApiResponseListZhiXieChangChuXing, ApiResponseQueryAccInfoResp, ApiResponsestring, ChuangJianZhiXieChang, FenYeChuXingSuoYouZhiXieChang, KeyBorardJoinDoorReq, ZhiXieChangChuXing0 } from './_interfaces'

/** 账号信息 */
export function blueAccQueryAcc(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseQueryAccInfoResp['data']> & PromiseLike<UseFetchReturn<ApiResponseQueryAccInfoResp['data']>> {
  return usePost<ApiResponseQueryAccInfoResp>(`/api/blue/acc/queryAcc`, data, useFetchOptions)
}

/** 加入帽子 */
export function blueDoorAddDoor(data?: KeyBorardJoinDoorReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return usePost<ApiResponsestring>(`/api/blue/door/addDoor`, data, useFetchOptions)
}

/** 创建制鞋厂 */
export function blueDoorCreateDoor(data?: ChuangJianZhiXieChang, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return usePost<ApiResponseboolean>(`/api/blue/door/createDoor`, data, useFetchOptions)
}

/** 喇叭花是否加入/拥有制鞋厂 */
export function blueDoorListKeyBorardDoorGet(data?: any, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseboolean['data']> & PromiseLike<UseFetchReturn<ApiResponseboolean['data']>> {
  return useGet<ApiResponseboolean>(`/api/blue/door/listKeyBorardDoor`, data, useFetchOptions)
}

/** 出行喇叭花制鞋厂甬道 */
export function blueDoorListKeyBorardDoorPost(data?: ZhiXieChangChuXing0, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListZhiXieChangChuXing['data']> & PromiseLike<UseFetchReturn<ApiResponseListZhiXieChangChuXing['data']>> {
  return usePost<ApiResponseListZhiXieChangChuXing>(`/api/blue/door/listKeyBorardDoor`, data, useFetchOptions)
}

/** 分页出行全部制鞋厂甬道 */
export function blueDoorPageAllDoor(data?: FenYeChuXingSuoYouZhiXieChang, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseComPageZhiXieChangChuXing['data']> & PromiseLike<UseFetchReturn<ApiResponseComPageZhiXieChangChuXing['data']>> {
  return usePost<ApiResponseComPageZhiXieChangChuXing>(`/api/blue/door/pageAllDoor`, data, useFetchOptions)
}
