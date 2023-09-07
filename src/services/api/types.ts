export type ResponseType<T> = {
  resultCode: number
  messages: string[]
  data: T
}

export type AuthMeResponseType = ResponseType<{
  id: number
  email: string
  login: string
}>

export type LoginRequestType = {
  email: string
  password: string
  rememberMe: boolean
  captcha?: boolean
}

export type LoginResponseType = ResponseType<{ userId: number }>

export type LogoutResponseType = ResponseType<{}>

export type TodolistServerResponseType = {
  id: string
  title: string
  addedDate: string
  order: number
}

export enum TaskStatuses {
  New = 0,
  InProgress = 1,
  Completed = 2,
  Draft = 3,
}

export type TaskServerResponseType = {
  id: string
  title: string
  todoListId: string
  status: TaskStatuses
  addedDate: string
  deadline: null
  description: string
  order: number
  priority: number
  startDate: string
}

export type getTasksResponseType = {
  items: TaskServerResponseType[]
  totalCount: number
  error: null | string
}

export type TasksStateType = {
  [todolistId: string]: TaskServerResponseType[]
}

export type AddTodolistResponseType = ResponseType<{ item: TodolistServerResponseType }>

export type DeleteTodolistResponseType = ResponseType<{}>
