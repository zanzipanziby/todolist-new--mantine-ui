import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { authAPI } from '../api/auth.api.ts'

const initialState = {
  isLoggedIn: false,
}

const slice = createSlice({
  initialState: initialState,
  name: 'auth',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authMe.fulfilled, state => {
      debugger
      state.isLoggedIn = true
    })
  },
})

const authMe = createAsyncThunk('auth/me', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  debugger

  try {
    return await authAPI.me()
  } catch (error) {
    return rejectWithValue(error)
  }
})
const authThunks = { authMe }

export const authActions = { ...authThunks }
export const authReducer = slice.reducer
