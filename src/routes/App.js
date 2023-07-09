import React from 'react'
import {
  Background,
  CenterHorizontal,
  CenterVertical,
  Header,
  LastUpdated,
  LoadingIndicator
} from '../components/index'
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher'
import { CitySelector } from '../features/search/CitySelector'
import { LocationButton } from '../features/search/LocationButton'
import { Tab, TabContent, TabsContainer } from '../features/weatherTabs/Tabs'
import { WeatherCurrent } from '../features/weather/WeatherCurrent'
import { WeatherLongTerm } from '../features/weather/WeatherLongTerm'
import { WeatherToday } from '../features/weather/WeatherToday'

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
