import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { tasksAPI } from '../api/tasks.api.ts'
import { TasksStateType } from '../api/types.ts'

import { todolistsActions } from './todolist.reducer.ts'

const slice = createSlice({
  initialState: {} as TasksStateType,
  name: 'tasks',
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTasks.fulfilled, (state, action) => {
        state[action.payload.todolistId] = action.payload.tasks
      })
      .addCase(todolistsActions.getTodolists.fulfilled, (state, action) => {
        action.payload.todolists.forEach(t => (state[t.id] = []))
      })
  },
})

export const tasksReducer = slice.reducer

const getTasks = createAsyncThunk(
  'tasks/getTasks',
  async (arg: { todolistId: string }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const res = await tasksAPI.getTasks(arg.todolistId)

      return { tasks: res.data.items, todolistId: arg.todolistId }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
