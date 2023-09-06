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
export type AddTodolistResponseType = ResponseType<{ item: TodolistServerResponseType }>

export type DeleteTodolistResponseType = ResponseType<{}>
