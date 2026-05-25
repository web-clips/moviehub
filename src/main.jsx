import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './app/providers/StoreProvider'
createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </StoreProvider>
)
