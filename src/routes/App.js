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
  WeatherCurrent,
  WeatherToday,
  WeatherLongTerm,
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
