import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Text, TextSecondary, Header, Column, Card } from './index'
import styled from 'styled-components'

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

function WeatherItem(props) {
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

function WeatherNotLoaded() {
  return <TextSecondary>
    Weather not loaded
  </TextSecondary>
}

export function CurrentWeather() {
  const currentWeather = useSelector(state => state.weather.current)

  if (currentWeather === null) {
    return <WeatherNotLoaded />
  }

  const iconURL = currentWeather.condition.icon.replace('64x64', '128x128')

  return (
    <Card>
      <Row>
        <Column style={{ paddingRight: '5%' }}>
          <img
            src={iconURL}
            alt={currentWeather.condition.text + ' icon'}/>

          <Header style={{ padding: 0, margin: 0 }}>
            {currentWeather.condition.text}
          </Header>
          <TextSecondary style={{ padding: 0, margin: 0 }}>
            {currentWeather.temp_c}&#176;C / {currentWeather.temp_f}&#176;F
          </TextSecondary>
          <TextSecondary style={{ padding: 0, margin: 0, fontSize: 'small' }}>
            Feels like: {currentWeather.feelslike_c}&#176;C
          </TextSecondary>
        </Column>
        <Column>
          <WeatherItem
            label='Humidity'
            value={currentWeather.humidity + '%'}/>
          <WeatherItem
            label='Precipitation'
            value={currentWeather.precip_mm + 'mm'}/>

          <WeatherItem
            label='Wind'
            value={
              `${currentWeather.wind_kph}km/h
              (up to ${currentWeather.gust_kph}km/h)`
            }/>
          <WeatherItem
            label='Wind direction'
            value={
              `${currentWeather.wind_degree}° (${currentWeather.wind_dir})`
            }/>

          <WeatherItem
            label='Pressure'
            value={currentWeather.pressure_mb + 'hPa'}/>
          <WeatherItem
            label='Cloud'
            value={currentWeather.cloud + '%'}/>
          <WeatherItem
            label='Visibility'
            value={currentWeather.vis_km + 'km'}/>
          <WeatherItem
            label='UV'
            value={currentWeather.uv}/>
        </Column>
      </Row>
    </Card>
  )
}

export function TodayWeather() {
  const todayWeather = useSelector(state => state.weather.today)

  if (todayWeather === null) {
    return <WeatherNotLoaded />
  }

  return <Text>Today: {JSON.stringify(todayWeather)}</Text>
}

export function LongTermWeather() {
  const longTermWeather = useSelector(state => state.weather.longTerm)

  if (longTermWeather.length === 0) {
    return <WeatherNotLoaded />
  }

  return <Text>Long term: {JSON.stringify(longTermWeather)}</Text>
}
