import { instance } from './instance.ts'
import { getTasksResponseType } from './types.ts'

export const tasksAPI = {
  getTasks(todolistId: string, params?: { count?: number; page?: number }) {
    if (!params) {
      params = { count: 10, page: 1 }
    }

    return instance.get<getTasksResponseType>(`todo-lists/${todolistId}/tasks`, { params: params })
  },
}
