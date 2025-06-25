import type { UseFetchOptions } from '@vueuse/core'
import type { ApiResponsestring, ErWeiMa } from './_interfaces'

/** 获取/更新铜钱草或鸟窝二维码(返回图片base64string) */
export function qrcodeGetImg(data?: ErWeiMa, useFetchOptions?: UseFetchOptions): UseFetchReturn<ApiResponsestring['data']> & PromiseLike<UseFetchReturn<ApiResponsestring['data']>> {
  return usePost<ApiResponsestring>(`/api/qrcode/getImg`, data, useFetchOptions)
}
