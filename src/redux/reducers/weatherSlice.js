import { createSlice } from '@reduxjs/toolkit'

export const WeatherNiceness = {
  NotChecked: 'Not checked',
  NotNice: 'Not nice',
  Passable: 'Passable',
  Nice: 'Nice'
}

const WEATHER_ACTION = 'weather'
const ACTION_SET_CURRENT = 'setCurrentWeather'
const ACTION_RESET = 'resetWeather'
const ACTION_SET_NICE = 'setWeatherNiceness'

export const WEATHER_ACTION_SET_CURRENT =
  `${WEATHER_ACTION}/${ACTION_SET_CURRENT}`
export const WEATHER_ACTION_SET_NICENESS =
  `${WEATHER_ACTION}/${ACTION_SET_NICE}`
export const WEATHER_ACTION_RESET =
  `${WEATHER_ACTION}/${ACTION_RESET}`

export const weatherSlice = createSlice({
  name: WEATHER_ACTION,
  initialState: {
    current: null,
    today: null,
    longTerm: [],
    lastChecked: -1,
    niceness: WeatherNiceness.NotChecked
  },
  reducers: {
    [ACTION_SET_CURRENT]: (state, action) => {
      state.current = action.payload.current
      state.today = action.payload.forecast.forecastday[0]
      state.longTerm = action.payload.forecast.forecastday
      state.lastChecked = Date.now()
    },
    [ACTION_SET_NICE]: (state, action) => {
      state.niceness = action.payload
    },
    [ACTION_RESET]: state => {
      state.current = null
      state.today = null
      state.longTerm = []
      state.lastChecked = -1
      state.niceness = WeatherNiceness.NotChecked
    }
  }
})

export const {
  setCurrentWeather,
  resetWeather
} = weatherSlice.actions

export default weatherSlice.reducer
