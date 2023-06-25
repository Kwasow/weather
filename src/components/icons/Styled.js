import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export function StyledIcon(props) {
  const themeContext = useContext(ThemeContext)
  
  const { icon: Icon } = props

  return (
    <Icon color={themeContext.primary}/>
  )
}
