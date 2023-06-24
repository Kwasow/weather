import React from 'react'
import styled from 'styled-components'
import {
  Card,
  CenterHorizontal,
  Column,
  Grid,
  Header,
  Row,
  Text,
  TextSecondary
} from '../index'

export function WeatherNotLoaded() {
  return <TextSecondary>
    Weather not loaded
  </TextSecondary>
}

export const BackgroundCard = styled(Card)`
  padding: 2%;
  margin-top: 1vh;
  margin-bottom: 1vh;
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

export function GeneralDayWeather(props) {
  const { date, day } = props

  const iconURL = day.condition.icon.replace('64x64', '128x128')

  return (
    <CenterHorizontal>
      {date && <TextSecondary>{date}</TextSecondary>}
      <DayGrid>
        <CenterHorizontal>
          <img
            src={iconURL}
            alt={day.condition.text}/>
          <Header style={{ margin: 0, padding: 0 }}>
            {day.condition.text}
          </Header>
          <TextSecondary style={{ marginTop: 0, paddingTop: 0 }}>
            {day.maxtemp_c}&#176;C{' '}
            ({day.mintemp_c}&#176;C)
          </TextSecondary>
        </CenterHorizontal>
        <Column>
          <WeatherItem
            label='Rain chance'
            value={day.daily_chance_of_rain + '%'}/>
          <WeatherItem
            label='Precipitation amount'
            value={day.totalprecip_mm + ' mm'}/>
          <WeatherItem
            label='Snow chance'
            value={day.daily_chance_of_snow + '%'}/>
          <WeatherItem
            label='Snow amount'
            value={day.totalsnow_cm + ' cm'}/>
          <WeatherItem
            label='Humidity'
            value={day.avghumidity + '%'}/>
          <WeatherItem
            label='UV index'
            value={day.uv}/>
        </Column>
      </DayGrid>
    </CenterHorizontal>
  )
}
