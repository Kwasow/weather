import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../components'
import { switchTheme } from '../slice'
import { useDispatch } from 'react-redux'

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
