import React from 'react'
import { useSelector } from 'react-redux'
import {
  Row,
  Text,
  TextSecondary,
  Header,
  Column,
  CenterHorizontal
} from './index'
import styled from 'styled-components'
import { Card } from './Card'
import { Table, TableCell, TableRow } from './Table'

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
  width: 15%;
`

const TableCellAlignRight = styled(TableCell)`
  text-align: right;
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

function WeatherTile(props) {
  const { title, icon, alt, temperature } = props

  return (
    <WeatherTileCard>
      <CenterHorizontal>
        <Text>{title}</Text>
        <img src={icon} alt={alt} />
        <Text>{temperature}</Text>
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
      <CenterHorizontal>
        <img
          src={iconURL}
          alt={todayWeather.day.condition.text}/>
        <Header style={{ margin: 0, padding: 0 }}>
          {todayWeather.day.condition.text}
        </Header>
        <TextSecondary style={{ marginTop: 0, paddingTop: 0 }}>
          {todayWeather.day.avgtemp_c}&#176;C /{' '}
          {todayWeather.day.avgtemp_f}&#176;F
        </TextSecondary>

        <Table>
          <TableRow>
            <TableCellAlignRight>
              <Header>Night</Header>
            </TableCellAlignRight>
            <TableCell>
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
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCellAlignRight>
              <Header>Morning</Header>
            </TableCellAlignRight>
            <TableCell>
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
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCellAlignRight>
              <Header>Afternoon</Header>
            </TableCellAlignRight>
            <TableCell>
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
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCellAlignRight>
              <Header>Evening</Header>
            </TableCellAlignRight>
            <TableCell>
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
            </TableCell>
          </TableRow>
        </Table>
      </CenterHorizontal>
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
