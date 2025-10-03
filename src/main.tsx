import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './style.css'
import App from './App'

const container = document.querySelector('#app')

if (!container) {
  throw new Error('Unable to find application root element')
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
)
