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
  TabContent
} from '../components/index'
import { useSelector } from 'react-redux'

function App() {
  const currentLocation = useSelector(state => state.location.current)
  const weatherCurrent = useSelector(state => state.weather.current)
  const weatherToday = useSelector(state => state.weather.today)
  const weatherLongTerm = useSelector(state => state.weather.longTerm)

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
          <Text>
            Current: {JSON.stringify(weatherCurrent).substring(0, 30)}
          </Text>
        </TabContent>
        <TabContent id={2}>
          <Text>Today: {JSON.stringify(weatherToday).substring(0, 30)}</Text>
        </TabContent>
        <TabContent id={3}>
          <Text>
            LongTerm: {JSON.stringify(weatherLongTerm).substring(0, 30)}
          </Text>
        </TabContent>
      </CenterHorizontal>
    </Background>
  )
}

export default App
