import { useEffect } from 'react'

import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'

import { useAppDispatch } from './app/hooks.ts'
import { router } from './router/router.tsx'
import { authActions } from './services/reducers/auth.reducer.ts'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authActions.authMe())
  }, [])

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
