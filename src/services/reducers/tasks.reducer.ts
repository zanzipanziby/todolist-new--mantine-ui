import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { tasksAPI } from '../api/tasks.api.ts'
import { TasksStateType } from '../api/types.ts'
import { errorResponseProcessing } from '../utils/error-response-processing.ts'

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
      .addCase(removeTask.fulfilled, (state, action) => {
        state[action.payload.arg.todolistId] = state[action.payload.arg.todolistId].filter(
          el => el.id !== action.payload.arg.taskId
        )
      })
  },
})

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

const removeTask = createAsyncThunk(
  'tasks/removeTask',
  async (arg: { todolistId: string; taskId: string }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const res = await tasksAPI.removeTask(arg.todolistId, arg.taskId)

      return { res: errorResponseProcessing(res, rejectWithValue), arg }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const tasksThunk = { getTasks, removeTask }

export const tasksActions = { ...tasksThunk }

export const tasksReducer = slice.reducer
