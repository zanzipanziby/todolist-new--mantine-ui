import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import { Theme } from '@radix-ui/themes'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import '@radix-ui/themes/styles.css'
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <Theme>
    <App />
  </Theme>
)
