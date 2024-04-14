import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ToasterProvider } from './contexts/ToasterContext.tsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToasterProvider>
          <App />
        </ToasterProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
