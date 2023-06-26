/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Oval } from 'react-loader-spinner'
import { Text } from './index'
import styled, { ThemeContext } from 'styled-components'

const LoadingIndicatorWrapper = styled.div`
  div {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
  }
`

export function LoadingIndicator() {
  const activeRequestCount = useSelector(
    state => state.requestCounter.runningRequests
  )
  const themeContext = useContext(ThemeContext)

  console.log(LoadingIndicatorWrapper.toString().slice(1))

  return (
    <LoadingIndicatorWrapper>
      <Oval
        color={themeContext.primary}
        visible={activeRequestCount > 0}
        ariaLabel='oval-loading'
        secondaryColor={themeContext.primarySelected}
        strokeWidth={5}
        strokeWidthSecondary={5}/>
    </LoadingIndicatorWrapper>
  )
}
