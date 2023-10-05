import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ScrollToTop from './UseStates/ScrollToTop.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
    <App />
    </BrowserRouter>
  
  </React.StrictMode>,
)
