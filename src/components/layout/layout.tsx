import { Container } from '@mantine/core'
import { Outlet } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks.ts'
import { HeaderComponent } from '../ui/header'

export const Layout = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

  return (
    <div>
      <HeaderComponent isLoggedIn={isLoggedIn} />
      <Container size={'lg'}>
        <Outlet />
      </Container>
    </div>
  )
}
