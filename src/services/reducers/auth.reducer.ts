import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { authAPI } from '../api/auth.api.ts'
import { errorResponseProcessing } from '../utils/error-response-processing.ts'

const initialState = {
  isLoggedIn: false,
}

const slice = createSlice({
  initialState: initialState,
  name: 'auth',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authMe.fulfilled, state => {
      state.isLoggedIn = true
    })
  },
})

const authMe = createAsyncThunk('auth/me', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await authAPI.me()

    return errorResponseProcessing(res, rejectWithValue)
  } catch (error) {
    return rejectWithValue(error)
  }
})
const authThunks = { authMe }

export const authActions = { ...authThunks }
export const authReducer = slice.reducer
