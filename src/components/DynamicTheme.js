import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

export const DynamicTheme = ({children}) => {
  const theme = useSelector(state => state.theme.value)

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
