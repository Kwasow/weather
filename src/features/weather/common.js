import React from 'react'
import styled from 'styled-components'
import {
  Card,
  CenterHorizontal,
  Column,
  Grid,
  Header,
  Row,
  TextNoPadding,
  TextSecondary,
  TextSecondaryNoPadding
} from '../../components'

export function WeatherNotLoaded() {
  return <TextSecondary>
    Weather not loaded
  </TextSecondary>
}

export const BackgroundCard = styled(Card)`
  padding: 40px;
  margin-top: 1vh;
  margin-bottom: 1vh;
`

export const HourlyGrid = styled(Grid)`
  grid-template-columns: auto auto;
  padding-top: 50px;
`

export const DayGrid = styled(Grid)`
  grid-template-columns: 1fr 1fr;
  width: 100%;
`

const WeatherItemLabel = styled(TextNoPadding)`
  margin-bottom: 5px;
  margin-top: 5px;
`

const WeatherItemValue = styled(TextNoPadding)`
  margin-bottom: 5px;
  margin-top: 5px;
  margin-left: 0.5rem;
  color: ${props => props.theme.primary};
  font-weight: bold;
`

export function WeatherItem({ label, value }) {
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

export function GeneralDayWeather({ date, day }) {
  const iconURL = day.condition.icon.replace('64x64', '128x128')

  return (
    <CenterHorizontal>
      {date && <TextSecondaryNoPadding>{date}</TextSecondaryNoPadding>}
      <DayGrid>
        <CenterHorizontal>
          <img
            src={iconURL}
            alt={day.condition.text}/>
          <Header style={{ margin: 0, padding: 0 }}>
            {day.condition.text}
          </Header>
          <TextSecondaryNoPadding>
            {day.maxtemp_c}&#176;C{' '}
            ({day.mintemp_c}&#176;C)
          </TextSecondaryNoPadding>
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
