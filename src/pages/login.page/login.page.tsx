import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks.ts'
import { Login } from '../../components/auth/login/login.tsx'

export const LoginPage = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn])

  return <Login onSubmit={() => {}} />
}
