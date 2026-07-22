import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import Rotas from './routes.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Rotas />
  </StrictMode>,
)
