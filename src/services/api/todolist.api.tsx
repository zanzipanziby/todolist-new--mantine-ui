import { instance } from './instance.ts'

export const todolistAPI = {
  getTodolists() {
    return instance.get('todo-lists')
  },
}
