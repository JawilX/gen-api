import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponseListPhoneFriendshipResp, PhoneListReq } from './_interfaces'

/** 手机号甬道 */
export function phoneList(data?: PhoneListReq, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponseListPhoneFriendshipResp['data']> & PromiseLike<UseFetchReturn<ApiResponseListPhoneFriendshipResp['data']>> {
  return usePost<ApiResponseListPhoneFriendshipResp>(`/api/phone/list`, data, useFetchOptions)
}
