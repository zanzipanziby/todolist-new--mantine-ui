import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components/layout/layout.tsx'

export const outer = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
])
