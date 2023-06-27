import React from 'react'
import { TextSecondaryNoPadding } from './Text'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Container = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  text-align: left;
`

export function LastUpdated() {
  const currentWeather = useSelector(state => state.weather.current)

  return (
    <Container>
      <TextSecondaryNoPadding>
        Powered by{' '}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </TextSecondaryNoPadding>
      <TextSecondaryNoPadding>
        Last updated:{' '}
        {currentWeather ? currentWeather.last_updated : 'never'}
      </TextSecondaryNoPadding>
    </Container>
  )
}
