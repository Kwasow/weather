import React from 'react'
import { useSelector } from 'react-redux'
import {
  Row,
  Text,
  TextSecondary,
  Header,
  Column,
  CenterHorizontal,
  Grid
} from './index'
import styled from 'styled-components'
import { Card } from './Card'

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

const BackgroundCard = styled(Card)`
  padding: 2%;
  margin: 2%;
`

const WeatherTileCard = styled(Card)`
  display: inline-flex;
  padding-right: 5px;
  padding-left: 5px;
  margin: 5px;
  width: 80px;
`

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

const HourlyGrid = styled(Grid)`
  grid-template-columns: auto auto;
`

const DayGrid = styled(Grid)`
  grid-template-columns: 50% 50%;
  padding-bottom: 50px;
`

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

export function CurrentWeather() {
  const currentWeather = useSelector(state => state.weather.current)

  if (currentWeather === null) {
    return <WeatherNotLoaded />
  }

  const iconURL = currentWeather.condition.icon.replace('64x64', '128x128')

  return (
    <BackgroundCard>
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
            value={currentWeather.precip_mm + ' mm'}/>

          <WeatherItem
            label='Wind'
            value={
              `${currentWeather.wind_kph} km/h
              (up to ${currentWeather.gust_kph} km/h)`
            }/>
          <WeatherItem
            label='Wind direction'
            value={
              `${currentWeather.wind_degree}° (${currentWeather.wind_dir})`
            }/>

          <WeatherItem
            label='Pressure'
            value={currentWeather.pressure_mb + ' hPa'}/>
          <WeatherItem
            label='Cloud'
            value={currentWeather.cloud + '%'}/>
          <WeatherItem
            label='Visibility'
            value={currentWeather.vis_km + ' km'}/>
          <WeatherItem
            label='UV index'
            value={currentWeather.uv}/>
        </Column>
      </Row>
    </BackgroundCard>
  )
}

export function TodayWeather() {
  const todayWeather = useSelector(state => state.weather.today)

  if (todayWeather === null) {
    return <WeatherNotLoaded />
  }

  const iconURL = todayWeather.day.condition.icon.replace('64x64', '128x128')

  const night = todayWeather.hour.slice(0, 6)
  const morning = todayWeather.hour.slice(6, 12)
  const afternoon = todayWeather.hour.slice(12, 18)
  const evening = todayWeather.hour.slice(18, 24)

  return (
    <BackgroundCard>
      <DayGrid>
        <CenterHorizontal>
          <img
            src={iconURL}
            alt={todayWeather.day.condition.text}/>
          <Header style={{ margin: 0, padding: 0 }}>
            {todayWeather.day.condition.text}
          </Header>
          <TextSecondary style={{ marginTop: 0, paddingTop: 0 }}>
            {todayWeather.day.maxtemp_c}&#176;C{' '}
            ({todayWeather.day.mintemp_c}&#176;C)
          </TextSecondary>
        </CenterHorizontal>
        <Column>
          <WeatherItem
            label='Rain chance'
            value={todayWeather.day.daily_chance_of_rain + '%'}/>
          <WeatherItem
            label='Precipitation amount'
            value={todayWeather.day.totalprecip_mm + ' mm'}/>
          <WeatherItem
            label='Snow chance'
            value={todayWeather.day.daily_chance_of_snow + '%'}/>
          <WeatherItem
            label='Snow amount'
            value={todayWeather.day.totalsnow_cm + ' cm'}/>
          <WeatherItem
            label='Humidity'
            value={todayWeather.day.avghumidity + '%'}/>
          <WeatherItem
            label='UV index'
            value={todayWeather.day.uv}/>
        </Column>
      </DayGrid>
        
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

export function LongTermWeather() {
  const longTermWeather = useSelector(state => state.weather.longTerm)

  if (longTermWeather.length === 0) {
    return <WeatherNotLoaded />
  }

  return <Text>Long term: {JSON.stringify(longTermWeather)}</Text>
}
