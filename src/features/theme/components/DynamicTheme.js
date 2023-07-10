import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Themes } from '../../../utils/theme'

export const DynamicTheme = ({ children }) => {
  const theme = useSelector(
    state => state.theme.isLight ? Themes.LIGHT : Themes.DARK
  )

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
