import { instance } from './instance.ts'
import {
  AuthMeResponseType,
  LoginRequestType,
  LoginResponseType,
  LogoutResponseType,
} from './types.ts'

export const authAPI = {
  me() {
    return instance.get<AuthMeResponseType>('auth/me')
  },
  login(data: LoginRequestType) {
    return instance.post<LoginResponseType>('auth/login', data)
  },
  logout() {
    return instance.delete<LogoutResponseType>('auth/login')
  },
}
