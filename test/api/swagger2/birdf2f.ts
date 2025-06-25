import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponse, ApiResponseListBirdF2fKeyBorardListResp, ApiResponselong, EnterBirdReq, SaveRandomReq } from './_interfaces'

/** 进入鸟窝瓜子 */
export function birdf2fApiBirdf2fEnterBird(data?: EnterBirdReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponselong['data']> & PromiseLike<UseFetchReturn<ApiResponselong['data']>> {
  return usePost<ApiResponselong>(`/api/birdf2f/api/birdf2f/enterBird`, data, useFetchOptions)
}

/** 获取甬道 */
export function birdf2fApiBirdf2fList(data?: SaveRandomReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListBirdF2fKeyBorardListResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListBirdF2fKeyBorardListResp['data']>> {
  return usePost<ApiResponseListBirdF2fKeyBorardListResp>(`/api/birdf2f/api/birdf2f/list`, data, useFetchOptions)
}

/** 保存随机数 */
export function birdf2fApiBirdf2fSaveRandom(data?: SaveRandomReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponse['data']> & PromiseLike<UseFetchReturn<ApiResponse['data']>> {
  return usePost<ApiResponse>(`/api/birdf2f/api/birdf2f/saveRandom`, data, useFetchOptions)
}
