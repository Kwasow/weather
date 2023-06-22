import React from 'react'
import {
  Background,
  ThemeSwitcher,
  Header,
  CenterHorizontal,
  CitySelector
} from '../components/index'
import { useSelector } from 'react-redux'

function App() {
  const currentLocation = useSelector(state => state.location.current)

  return (
    <Background>
      <ThemeSwitcher />
      <CenterHorizontal>
        <Header>Forecast</Header>
        <CitySelector />
        <p>
          {JSON.stringify(currentLocation)}
        </p>
      </CenterHorizontal>
    </Background>
  )
}

export default App
