import React from 'react'
import { useSelector } from 'react-redux'
import { Text } from './index'

export function CurrentWeather() {
  const currentWeather = useSelector(state => state.weather.current)

  return <Text>Current: {JSON.stringify(currentWeather)}</Text>
}

export function TodayWeather() {
  const todayWeather = useSelector(state => state.weather.today)

  return <Text>Today: {JSON.stringify(todayWeather)}</Text>
}

export function LongTermWeather() {
  const longTermWeather = useSelector(state => state.weather.longTerm)

  return <Text>Long term: {JSON.stringify(longTermWeather)}</Text>
}
