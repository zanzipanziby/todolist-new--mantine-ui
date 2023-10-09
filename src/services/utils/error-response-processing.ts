import { BaseThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk'
import { AxiosResponse } from 'axios'

import { ResponseType } from '../api/types.ts'
import { AppDispatch, RootState } from '../store.ts'

type ThunkApi = BaseThunkAPI<RootState, any, AppDispatch, unknown>
type RejectWithValue = ThunkApi['rejectWithValue']

export const errorResponseProcessing = <T>(
  res: AxiosResponse<ResponseType<T>>,
  rejectWithValue: RejectWithValue
) => {
  if (res.data.resultCode === 1) {
    return rejectWithValue(res)
  } else {
    return res
  }
}
