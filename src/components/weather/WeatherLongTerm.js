import React from 'react'
import { useSelector } from 'react-redux'
import { BackgroundCard, GeneralDayWeather, WeatherNotLoaded } from './common'
import { CenterHorizontal, Column } from '../index'

export function WeatherLongTerm() {
  const longTermWeather = useSelector(state => state.weather.longTerm)

  console.log(longTermWeather)

  if (longTermWeather.length === 0) {
    return <WeatherNotLoaded />
  }

  return (
    <CenterHorizontal>
      <Column>
        {longTermWeather.map((value, index) => {
          console.log(value)

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
