import React from 'react'
import {
  Background,
  ThemeSwitcher,
  Header,
  CenterHorizontal,
  CitySelector,
  Text,
  TabsContainer,
  Tab,
  TabContent,
  CurrentWeather,
  TodayWeather,
  LongTermWeather
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
        <Text>Location: {JSON.stringify(currentLocation)}</Text>

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
