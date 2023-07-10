import React from 'react'
import styled from 'styled-components'
import { CenterHorizontal, Header } from '../../../components'
import { useSelector } from 'react-redux'

const TabContentWrapper = styled(CenterHorizontal)`
  margin: 0.5%;
  width: 100%;
`

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
