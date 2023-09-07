import { Outlet } from 'react-router-dom'

import { HeaderComponent } from '../ui/header'

export const Layout = () => {
  return (
    <div>
      <HeaderComponent isLoggedIn={false} />
      <Outlet />
    </div>
  )
}
