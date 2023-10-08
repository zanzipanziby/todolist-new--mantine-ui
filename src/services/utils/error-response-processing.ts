import { AxiosResponse } from 'axios'

import { ResponseType } from '../api/types.ts'

export const errorResponseProcessing = <T>(
  res: AxiosResponse<ResponseType<T>>,
  rejectWithValue: (res: AxiosResponse<ResponseType<T>>) => unknown
) => {
  if (res.data.resultCode === 1) {
    return rejectWithValue(res)
  } else {
    return res
  }
}
