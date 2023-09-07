import { instance } from './instance.ts'

export const tasksAPI = {
  getTasks(todolistId: string, params?: { count?: number; page?: number }) {
    if (!params) {
      params = { count: 10, page: 1 }
    }

    return instance.get(`todo-lists/${todolistId}/tasks`, { params: params })
  },
}
