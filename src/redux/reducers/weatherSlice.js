import { createSlice } from '@reduxjs/toolkit'

const WEATHER_ACTION = 'weather'
const ACTION_SET_CURRENT = 'setCurrentWeather'
const ACTION_RESET = 'resetWeather'

export const WEATHER_ACTION_SET_CURRENT =
  `${WEATHER_ACTION}/${ACTION_SET_CURRENT}`
export const WEATHER_ACTION_RESET =
  `${WEATHER_ACTION}/${ACTION_RESET}`

export const weatherSlice = createSlice({
  name: WEATHER_ACTION,
  initialState: {
    current: null,
    today: null,
    longTerm: [],
    lastChecked: -1
  },
  reducers: {
    [ACTION_SET_CURRENT]: (state, action) => {
      state.current = action.payload.current
      state.today = action.payload.forecast.forecastday[0]
      state.longTerm = action.payload.forecast.forecastday
      state.lastChecked = action.payload.current.last_updated_epoch
    },
    [ACTION_RESET]: state => {
      state.current = null
      state.today = null
      state.longTerm = []
      state.lastChecked = -1
    }
  }
})

export const {
  setCurrentWeather,
  resetWeather
} = weatherSlice.actions

export default weatherSlice.reducer
