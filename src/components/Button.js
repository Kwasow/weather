import React from 'react'
import styled from 'styled-components'
import { StyledIcon } from './icons/index'

export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  border-radius: 50vh;
  border: 0px;
  cursor: pointer;
  color: ${props => props.theme.onPrimary};
  font-size: 0.9rem;
  font-weight: bold;
  padding: 15px;
  text-transform: uppercase;
`

const InvisibleButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  text-transform: uppercase;
  font-weight: bold;

  border: none;
  outline: none;
  background-color: transparent;

  border-radius: 1vh;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.onSurfaceHover};
  }
`

const IconLabel = styled.p`
  color: ${props => props.theme.primary};
  padding: 5px;
`

export function IconButton({ icon: Icon, onClick, label }) {
  return (
    <InvisibleButton onClick={onClick}>
      <StyledIcon icon={Icon}/>
      <IconLabel>{label}</IconLabel>
    </InvisibleButton>
  )
}
