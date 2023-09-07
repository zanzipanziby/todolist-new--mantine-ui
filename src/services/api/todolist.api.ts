import { instance } from './instance.ts'
import {
  AddTodolistResponseType,
  DeleteTodolistResponseType,
  TodolistServerResponseType,
} from './types.ts'

export const todolistAPI = {
  getTodolists() {
    return instance.get<TodolistServerResponseType[]>('todo-lists')
  },
  addTodolist(title: string) {
    return instance.post<AddTodolistResponseType>('todo-lists', { title })
  },
  deleteTodolist(todolistId: string) {
    return instance.delete<DeleteTodolistResponseType>(`todo-lists/${todolistId}`)
  },
  updateTodolist(todolistId: string, title: string) {
    return instance.put(`todo-lists/${todolistId}`, { title })
  },
}
