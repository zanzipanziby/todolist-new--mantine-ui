import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import { MantineProvider } from '@mantine/core'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import './index.scss'

createRoot(document.getElementById('root')!).render(
  <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
    <App />
  </MantineProvider>
)
