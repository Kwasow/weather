import React from 'react'
import { useSelector } from 'react-redux'
import { WeatherNotLoaded } from './common'
import { Text } from '../index'

export function WeatherLongTerm() {
  const longTermWeather = useSelector(state => state.weather.longTerm)

  if (longTermWeather.length === 0) {
    return <WeatherNotLoaded />
  }

  return <Text>Long term: {JSON.stringify(longTermWeather)}</Text>
}
