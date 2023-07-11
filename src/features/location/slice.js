import { createSlice } from '@reduxjs/toolkit'

const LOCATION_ACTION = 'location'
const ACTION_SET_USER_INPUT = 'setUserInputLocation'
const ACTION_SET_HINT_LOCATIONS = 'setHintLocations'
const ACTION_SET_SELECTED_LOCATION = 'setSelectedLocation'
const ACTION_LOAD_COORDINATES = 'loadLocationCoordinates'
const ACTION_SET_COORDINATES = 'setLocationCoordinates'
const ACTION_LOAD_COORDINATES_CANCEL = 'cancelLoadLocationCoordinates'
const ACTION_RESET = 'resetLocation'

export const LOCATION_ACTION_SET_USER_INPUT =
  `${LOCATION_ACTION}/${ACTION_SET_USER_INPUT}`
export const LOCATION_ACTION_SET_HINTS =
  `${LOCATION_ACTION}/${ACTION_SET_HINT_LOCATIONS}`
export const LOCATION_ACTION_SET_SELECTED_LOCATION =
  `${LOCATION_ACTION}/${ACTION_SET_SELECTED_LOCATION}`
export const LOCATION_ACTION_LOAD_COORDINATES =
  `${LOCATION_ACTION}/${ACTION_LOAD_COORDINATES}`
export const LOCATION_ACTION_SET_COORDINATES =
  `${LOCATION_ACTION}/${ACTION_SET_COORDINATES}`
export const LOCATION_ACTION_LOAD_COORDINATES_CANCEL =
  `${LOCATION_ACTION}/${ACTION_LOAD_COORDINATES_CANCEL}`
export const LOCATION_ACTION_RESET =
  `${LOCATION_ACTION}/${ACTION_RESET}`

const locationSlice = createSlice({
  name: LOCATION_ACTION,
  initialState: {
    userInput: '',
    current: null,
    hints: [],
    locationInProgress: false,
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
      state.userInput = `${action.payload.name} (${action.payload.country})`
    },
    [ACTION_LOAD_COORDINATES]: (state) => {
      state.locationInProgress = true
    },
    [ACTION_SET_COORDINATES]: (state, action) => {
      state.locationInProgress = false
      state.latitude = action.payload.latitude
      state.longitude = action.payload.longitude
    },
    [ACTION_LOAD_COORDINATES_CANCEL]: (state) => {
      state.locationInProgress = false
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
  loadLocationCoordinates,
  setLocationCoordinates,
  resetLocation
} = locationSlice.actions

export default locationSlice.reducer
