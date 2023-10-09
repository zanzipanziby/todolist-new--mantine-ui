import { instance } from './instance.ts'
import { getTasksResponseType, ResponseType, TaskServerResponseType } from './types.ts'

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
  addTask(todolistId: string, title: string) {
    return instance.post<ResponseType<{ item: TaskServerResponseType }>>(
      `todo-lists/${todolistId}/tasks`,
      {
        title,
      }
    )
  },
}
