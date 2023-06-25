import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export function StyledIcon({ icon: Icon }) {
  const themeContext = useContext(ThemeContext)

  return (
    <Icon color={themeContext.primary}/>
  )
}
