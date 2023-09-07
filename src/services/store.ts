import { configureStore } from '@reduxjs/toolkit'

import { tasksReducer } from './reducers/tasks.reducer.ts'
import { todolistsReducer } from './reducers/todolist.reducer.ts'

export const store = configureStore({
  reducer: {
    todolists: todolistsReducer,
    tasks: tasksReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
