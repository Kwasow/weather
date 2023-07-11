import React from 'react'
import {
  Background,
  CenterHorizontal,
  CenterVertical,
  Header,
  LastUpdated
} from '../components/index'
import { ThemeSwitcher } from '../features/theme/components'
import { CitySelector, LocationButton } from '../features/location/components'
import {
  Tab,
  TabContent,
  TabsContainer
} from '../features/weatherTabs/components'
import {
  WeatherCurrent,
  WeatherLongTerm,
  WeatherToday
} from '../features/weather/components'
import { LoadingIndicator } from '../features/requestCounter/components'

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
