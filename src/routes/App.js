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
  LastUpdated
} from '../components/index'

function App() {
  return (
    <Background>
      <ThemeSwitcher />
      <LastUpdated />

      <CenterHorizontal>
        <Header>Forecast</Header>
        <CitySelector />

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
