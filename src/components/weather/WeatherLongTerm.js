import React from 'react'
import { useSelector } from 'react-redux'
import {
  BackgroundCard,
  GeneralDayWeather,
  WeatherItem,
  WeatherNotLoaded
} from './common'
import { CenterHorizontal, Column } from '../index'

export function WeatherLongTerm() {
  const longTermWeather = useSelector(state => state.weather.longTerm)
  const niceness = useSelector(state => state.weather.niceness)

  if (longTermWeather.length === 0) {
    return <WeatherNotLoaded />
  }

  return (
    <CenterHorizontal>
      <WeatherItem
        label='Niceness'
        value={niceness}/>
      <Column>
        {longTermWeather.map((value, index) => {
          return (
            <BackgroundCard key={index}>
              <GeneralDayWeather date={value.date} day={value.day}/>
            </BackgroundCard>
          )
        })}
      </Column>
    </CenterHorizontal>
  )
}
