import React from 'react'
import {
  Background,
  CenterHorizontal,
  CitySelector,
  Header,
  LastUpdated,
  Tab,
  TabsContainer,
  TabContent,
  ThemeSwitcher,
  WeatherCurrent,
  WeatherToday,
  WeatherLongTerm,
} from '../components/index'
import { LocationButton } from '../components/Button'
import { LoadingIndicator } from '../components/LoadingIndicator'
import { CenterVertical } from '../components/Container'

function App() {
  return (
    <Background>
      <ThemeSwitcher />
      <LastUpdated />

      <CenterHorizontal>
        <CenterVertical>
          <Header>Forecast</Header>
          <LoadingIndicator />
        </CenterVertical>
        <CitySelector />
        <LocationButton/>
        
        <TabsContainer>
          <Tab id={1}>Current</Tab>
          <Tab id={2}>Today</Tab>
          <Tab id={3}>3-day</Tab>
        </TabsContainer>
        <TabContent id={1}>
          <WeatherCurrent />
        </TabContent>
        <TabContent id={2}>
          <WeatherToday />
        </TabContent>
        <TabContent id={3}>
          <WeatherLongTerm />
        </TabContent>
      </CenterHorizontal>
    </Background>
  )
}

export default App
