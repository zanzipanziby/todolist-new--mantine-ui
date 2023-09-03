import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { MantineProvider } from '@mantine/core'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.tsx'
import { store } from './services/store.ts'
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      <App />
    </MantineProvider>
  </Provider>
)
