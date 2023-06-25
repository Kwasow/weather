import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import {
  BackgroundCard,
  GeneralDayWeather,
  HourlyGrid,
  WeatherNotLoaded
} from './common'
import {
  CenterHorizontal,
  Card,
  Column,
  Header,
  Row,
  Text,
  TextSecondary
} from '../index'

const WeatherGridHeader = styled(Header)`
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
`

const WeatherGridSubheader = styled(TextSecondary)`
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
`

const WeatherTileCard = styled(Card)`
  display: inline-flex;
  padding-right: 20px;
  padding-left: 20px;
  margin: 5px;
`

function WeatherTile(props) {
  const { title, icon, alt, temperature } = props

  return (
    <WeatherTileCard>
      <CenterHorizontal>
        <TextSecondary>{title}</TextSecondary>
        <img src={icon} alt={alt} />
        <Text>{temperature}&#176;C</Text>
      </CenterHorizontal>
    </WeatherTileCard>
  )
}

function parseHour(hour) {
  const timeOfDay = hour.slice(-2)

  if (timeOfDay === 'AM') {
    return hour.substr(0, 5)
  } else {
    const hourDigits = parseInt(hour.substr(0, 2)) + 12
    const minuteDigits = hour.substr(3, 2)

    return `${hourDigits}:${minuteDigits}`
  }
}

export function WeatherToday() {
  const todayWeather = useSelector(state => state.weather.today)

  if (todayWeather === null) {
    return <WeatherNotLoaded />
  }

  const night = todayWeather.hour.slice(0, 6)
  const morning = todayWeather.hour.slice(6, 12)
  const afternoon = todayWeather.hour.slice(12, 18)
  const evening = todayWeather.hour.slice(18, 24)

  return (
    <BackgroundCard>
      <GeneralDayWeather day={todayWeather.day} />
        
      <HourlyGrid>
        <WeatherGridHeader>Night</WeatherGridHeader>
        <Row>
          {night.map((value, index) => {
            return (
              <WeatherTile
                key={index}
                title={value.time.slice(-5)}
                icon={value.condition.icon}
                alt={value.condition.text}
                temperature={value.temp_c}/>
            )
          })}
        </Row>
        <Column>
          <WeatherGridHeader>Morning</WeatherGridHeader>
          <WeatherGridSubheader>
            Sunrise: {parseHour(todayWeather.astro.sunrise)}
          </WeatherGridSubheader>
        </Column>
        <Row>
          {morning.map((value, index) => {
            return (
              <WeatherTile
                key={index}
                title={value.time.slice(-5)}
                icon={value.condition.icon}
                alt={value.condition.text}
                temperature={value.temp_c}/>
            )
          })}
        </Row>
        <WeatherGridHeader>Afternoon</WeatherGridHeader>
        <Row>
          {afternoon.map((value, index) => {
            return (
              <WeatherTile
                key={index}
                title={value.time.slice(-5)}
                icon={value.condition.icon}
                alt={value.condition.text}
                temperature={value.temp_c}/>
            )
          })}
        </Row>
        <Column>
          <WeatherGridHeader>Evening</WeatherGridHeader>
          <WeatherGridSubheader>
            Sunset: {parseHour(todayWeather.astro.sunset)}
          </WeatherGridSubheader>
        </Column>
        <Row>
          {evening.map((value, index) => {
            return (
              <WeatherTile
                key={index}
                title={value.time.slice(-5)}
                icon={value.condition.icon}
                alt={value.condition.text}
                temperature={value.temp_c}/>
            )
          })}
        </Row>
      </HourlyGrid>
    </BackgroundCard>
  )
}
