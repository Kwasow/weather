import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchTheme } from '../redux/reducers/themeSlice'
import { ThemeProvider } from 'styled-components'
import { Themes } from '../utils/theme'
import styled from 'styled-components'
import { Button } from './Button'

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

const ThemeSwitcherButton = styled(Button)`
  position: absolute;
  right: 10px;
  top: 10px;
`

export function ThemeSwitcher() {
  const dispatch = useDispatch()

  return <ThemeSwitcherButton
    aria-label='Theme switcher'
    onClick={() => {dispatch(switchTheme())}}>
    Switch theme
  </ThemeSwitcherButton>
}
