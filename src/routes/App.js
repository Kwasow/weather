import React from 'react'
import {
  Background,
  ThemeSwitcher,
  Header,
  CenterHorizontal,
  CitySelector,
  TabsContainer,
  Tab,
  TabContent,
  CurrentWeather,
  TodayWeather,
  LongTermWeather,
  TextSecondary
} from '../components/index'
import { useSelector } from 'react-redux'

function App() {
  const currentWeather = useSelector(state => state.weather.current)

  return (
    <Background>
      <ThemeSwitcher />
      <CenterHorizontal>
        <Header>Forecast</Header>
        <CitySelector />

        <TextSecondary style={{ textAlign: 'center' }}>
          Last updated:<br/>
          {currentWeather ? currentWeather.last_updated : 'never'}
        </TextSecondary>

        <TabsContainer>
          <Tab id={1}>Current</Tab>
          <Tab id={2}>Today</Tab>
          <Tab id={3}>Long term</Tab>
        </TabsContainer>
        <TabContent id={1}>
          <CurrentWeather />
        </TabContent>
        <TabContent id={2}>
          <TodayWeather />
        </TabContent>
        <TabContent id={3}>
          <LongTermWeather />
        </TabContent>
      </CenterHorizontal>
    </Background>
  )
}

export default App
