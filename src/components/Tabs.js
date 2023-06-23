import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { switchTab } from '../redux/reducers/tabSlice'

export const TabsContainer = styled.div`
  background-color: ${props => props.theme.surface};
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-around;
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

const TabContentWrapper = styled.div`
  padding: 0.5%;
`

export function Tab(props) {
  const selectedId = useSelector(state => state.tab.current)
  const dispatch = useDispatch()

  const { id } = props

  return <StyledTab
    className={selectedId === id ? 'active' : ''}
    onClick={() => dispatch(switchTab(id))}
  >
    {props.children}
  </StyledTab>
}

export function TabContent(props) {
  const selectedId = useSelector(state => state.tab.current)
  
  const { id } = props

  return id === selectedId
    ? <TabContentWrapper>{props.children}</TabContentWrapper>
    : <></>
}
