import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { switchTab } from '../slice'

export const TabsContainer = styled.div`
  background-color: ${props => props.theme.surface};
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
`

const StyledTab = styled.button`
  width: 100%;
  padding: 20px;
  background-color: inherit;
  cursor: pointer;

  border: none;
  outline: none;
  border-bottom: 2px solid ${props => props.theme.outlineVariant};
  transition: 0.3s;

  color: ${props => props.theme.onSurface};
  text-transform: uppercase;
  font-weight: bold;
  font-size: small; 

  &:hover {
    background-color: ${props => props.theme.onSurfaceHover};
  }

  &.active {
    background-color: ${props => props.theme.primarySelected};
    border-bottom: 2px solid ${props => props.theme.primary};
    color: ${props => props.theme.primary};
  }
`

export function Tab({ children, id }) {
  const selectedId = useSelector(state => state.tab.current)
  const dispatch = useDispatch()

  return <StyledTab
    className={selectedId === id ? 'active' : ''}
    onClick={() => dispatch(switchTab(id))}
  >
    {children}
  </StyledTab>
}
