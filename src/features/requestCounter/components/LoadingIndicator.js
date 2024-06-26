import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Oval } from 'react-loader-spinner'
import styled, { ThemeContext } from 'styled-components'

const LoadingIndicatorWrapper = styled.div`
  div {
    padding-left: 10px; 
  }
`

export function LoadingIndicator() {
  const activeRequestCount = useSelector(
    state => state.requestCounter.runningRequests
  )
  const locationInProgress =
    useSelector(state => state.location.locationInProgress)
  const themeContext = useContext(ThemeContext)
  const visible = activeRequestCount > 0 || locationInProgress

  return (
    <LoadingIndicatorWrapper>
      <Oval
        color={themeContext.primary}
        visible={visible}
        ariaLabel='oval-loading'
        secondaryColor={themeContext.primarySelected}
        strokeWidth={5}
        strokeWidthSecondary={5}
        height={20}
        width={20}/>
    </LoadingIndicatorWrapper>
  )
}
