import { instance } from './instance.ts'
import { getTasksResponseType, ResponseType } from './types.ts'

export const tasksAPI = {
  getTasks(todolistId: string, params?: { count?: number; page?: number }) {
    if (!params) {
      params = { count: 10, page: 1 }
    }

    return instance.get<getTasksResponseType>(`todo-lists/${todolistId}/tasks`, { params: params })
  },
  removeTask(todolistId: string, taskId: string) {
    return instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}/tasks/${taskId}`)
  },
}
