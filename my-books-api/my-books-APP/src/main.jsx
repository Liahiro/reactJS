import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import GlobalStyles from './styles/global.js'

// theme
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  
)
