import { createSlice } from '@reduxjs/toolkit'

const LOCATION_ACTION = 'location'
const ACTION_SET_USER_INPUT = 'setUserInputLocation'
const ACTION_SET_HINT_LOCATIONS = 'setHintLocations'
const ACTION_SET_SELECTED_LOCATION = 'setSelectedLocation'
const ACTION_SET_COORDINATES = 'setLocationCoordinates'
const ACTION_RESET = 'resetLocation'

export const LOCATION_ACTION_SET_USER_INPUT =
  `${LOCATION_ACTION}/${ACTION_SET_USER_INPUT}`
export const LOCATION_ACTION_SET_HINTS =
  `${LOCATION_ACTION}/${ACTION_SET_HINT_LOCATIONS}`
export const LOCATION_ACTION_SET_SELECTED_LOCATION =
  `${LOCATION_ACTION}/${ACTION_SET_SELECTED_LOCATION}`
export const LOCATION_ACTION_SET_COORDINATES =
  `${LOCATION_ACTION}/${ACTION_SET_COORDINATES}`
export const LOCATION_ACTION_RESET =
  `${LOCATION_ACTION}/${ACTION_RESET}`

export const locationSlice = createSlice({
  name: LOCATION_ACTION,
  initialState: {
    userInput: '',
    current: null,
    hints: [],
    latitude: -1,
    longitude: -1
  },
  reducers: {
    [ACTION_SET_USER_INPUT]: (state, action) => {
      state.userInput = action.payload
    },
    [ACTION_SET_HINT_LOCATIONS]: (state, action) => {
      state.hints = action.payload
    },
    [ACTION_SET_SELECTED_LOCATION]: (state, action) => {
      state.current = action.payload
    },
    [ACTION_SET_COORDINATES]: (state, action) => {
      state.latitude = action.payload.latitude
      state.longitude = action.payload.longitude
    },
    [ACTION_RESET]: state => {
      state.userInput = ''
      state.current = null
      state.hints = []
      state.latitude = -1
      state.longitude = -1
    }
  }
})

export const {
  setUserInputLocation,
  setHintLocations,
  setSelectedLocation,
  setLocationCoordinates,
  resetLocation
} = locationSlice.actions

export default locationSlice.reducer
