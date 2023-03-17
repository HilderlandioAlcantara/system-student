import React from 'react'
import ReactDOM from 'react-dom/client'
import { ResetStyled } from './styles/reset'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/theme'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <RouterProvider router={routes}/>
      <ResetStyled/>
    </ThemeProvider>
  </React.StrictMode>,
)
