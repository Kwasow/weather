import React from 'react'
import { TextSecondary } from './Text'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Container = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  text-align: left;
`

const TextNoPadding = styled(TextSecondary)`
  padding: 0;
  margin: 0;
`

export function LastUpdated() {
  const currentWeather = useSelector(state => state.weather.current)

  return (
    <Container>
      <TextNoPadding>
        Powered by{' '}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </TextNoPadding>
      <TextNoPadding>
        Last updated:{' '}
        {currentWeather ? currentWeather.last_updated : 'never'}
      </TextNoPadding>
    </Container>
  )
}
