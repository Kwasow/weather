import React from 'react'
import { useSelector } from 'react-redux'
import {
  BackgroundCard,
  DayGrid,
  WeatherItem,
  WeatherNotLoaded
} from './common'
import {
  Column,
  Header,
  TextSecondaryNoPadding
} from '../../../components'
import { GifView } from '../../weatherGif/components'

export function WeatherCurrent() {
  const currentWeather = useSelector(state => state.weather.current)

  if (currentWeather === null) {
    return <WeatherNotLoaded />
  }

  const iconURL = currentWeather.condition.icon.replace('64x64', '128x128')

  return (
    <>
      <BackgroundCard>
        <DayGrid>
          <Column>
            <img
              src={iconURL}
              alt={currentWeather.condition.text + ' icon'}
              width='128'
              height='128'/>

            <Header style={{ padding: 0, margin: 0 }}>
              {currentWeather.condition.text}
            </Header>
            <TextSecondaryNoPadding>
              {currentWeather.temp_c}&#176;C / {currentWeather.temp_f}&#176;F
            </TextSecondaryNoPadding>
            <TextSecondaryNoPadding style={{ fontSize: 'small' }}>
              Feels like: {currentWeather.feelslike_c}&#176;C
            </TextSecondaryNoPadding>
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
                (gusts of ${currentWeather.gust_kph} km/h)`
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
        </DayGrid>
      </BackgroundCard>

      <GifView />
    </>
  )
}
