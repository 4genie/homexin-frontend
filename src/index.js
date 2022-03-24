import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ResetStyle, GlobalStyle } from './styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
