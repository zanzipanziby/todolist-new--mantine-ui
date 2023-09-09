import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { todolistAPI } from '../api/todolist.api.ts'
import { TodolistServerResponseType } from '../api/types.ts'

import { tasksActions } from './tasks.reducer.ts'

const slice = createSlice({
  initialState: [] as TodolistServerResponseType[],
  name: 'todolists',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTodolists.fulfilled, (_, action) => {
      return action.payload.todolists
    })
  },
})

const getTodolists = createAsyncThunk('todolists/getTodolists', async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI

  try {
    const res = await todolistAPI.getTodolists()

    if (res.data.length > 0) {
      res.data.forEach(t => {
        dispatch(tasksActions.getTasks({ todolistId: t.id }))
      })
    }

    return { todolists: res.data }
  } catch (error) {
    return rejectWithValue(error)
  }
})

const todolistThunks = { getTodolists }

export const todolistsReducer = slice.reducer

export const todolistsActions = { ...todolistThunks }
