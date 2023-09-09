import { Navigate, Outlet } from 'react-router-dom'

import { useAppSelector } from '../app/hooks.ts'

export const ProtectedRoutes = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

  return isLoggedIn ? <Outlet /> : <Navigate to={'login'} />
}
