import React from 'react'
import styled from 'styled-components'
import { Card, Grid, Row, Text, TextSecondary } from '../index'

export function WeatherNotLoaded() {
  return <TextSecondary>
    Weather not loaded
  </TextSecondary>
}

export const BackgroundCard = styled(Card)`
  padding: 2%;
  margin: 2%;
`

export const HourlyGrid = styled(Grid)`
  grid-template-columns: auto auto;
`

export const DayGrid = styled(Grid)`
  grid-template-columns: 50% 50%;
  padding-bottom: 50px;
`

const WeatherItemLabel = styled(Text)`
  margin: 0;
  margin-bottom: 5px;
  margin-top: 5px;
`

const WeatherItemValue = styled(Text)`
  margin: 0;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-left: 5px;
  color: ${props => props.theme.primary};
  font-weight: bold;
  white-space: nowrap;
`

export function WeatherItem(props) {
  const { label, value } = props

  return (
    <Row>
      <WeatherItemLabel>
        {label}:
      </WeatherItemLabel>
      <WeatherItemValue>
        {value}
      </WeatherItemValue>
    </Row>
  )
}
