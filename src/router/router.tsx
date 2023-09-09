import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components/layout/layout.tsx'
import { LoginPage } from '../pages/login.page/login.page.tsx'
import { TodolistsPage } from '../pages/todolists.page/todolists.page.tsx'

import { ProtectedRoutes } from './protected-routes.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/',
            element: <TodolistsPage />,
          },
        ],
      },
    ],
  },
])
