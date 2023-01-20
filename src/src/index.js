import React from 'react'
import { ThemeProvider } from '@emotion/react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { worldwideTheme } from './styles/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={worldwideTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
