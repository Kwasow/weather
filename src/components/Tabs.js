import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { switchTab } from '../redux/reducers/tabSlice'
import { CenterHorizontal } from './Container'
import { Header } from './Text'

export const TabsContainer = styled.div`
  background-color: ${props => props.theme.surface};
  overflow: hidden;
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

const TabContentWrapper = styled(CenterHorizontal)`
  padding: 0.5%;
  width: 100%;
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

export function TabContent(props) {
  const selectedId = useSelector(state => state.tab.current)
  const currentLocation = useSelector(state => state.location.current)
  
  const { id } = props

  return id === selectedId
    ? (
      <TabContentWrapper>
        {currentLocation && <Header>{currentLocation.name}</Header>}
        {props.children}
      </TabContentWrapper>
    )
    : <></>
}
