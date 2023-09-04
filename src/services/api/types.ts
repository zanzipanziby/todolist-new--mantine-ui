export type AuthMeResponseType = {
  resultCode: number
  messages: string[]
  data: {
    id: number
    email: string
    login: string
  }
}

export type LoginRequestType = {
  email: string
  password: string
  rememberMe: boolean
  captcha?: boolean
}

export type LoginResponseType = {
  resultCode: number
  messages: string[]
  data: {
    userId: number
  }
}

export type LogoutResponseType = {
  resultCode: number
  messages: string[]
  data: {}
}
