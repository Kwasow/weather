import { createSlice } from '@reduxjs/toolkit'

const LOCATION_ACTION = 'location'
const ACTION_SET_USER_INPUT = 'setUserInputLocation'
const ACTION_SET_HINT_LOCATIONS = 'setHintLocations'
const ACTION_SET_SELECTED_LOCATION = 'setSelectedLocation'
const ACTION_RESET = 'resetLocation'

export const LOCATION_ACTION_SET_USER_INPUT =
  `${LOCATION_ACTION}/${ACTION_SET_USER_INPUT}`
export const LOCATION_ACTION_SET_HINTS =
  `${LOCATION_ACTION}/${ACTION_SET_HINT_LOCATIONS}`
export const LOCATION_ACTION_SET_SELECTED_LOCATION =
  `${LOCATION_ACTION}/${ACTION_SET_SELECTED_LOCATION}`
export const LOCATION_ACTION_RESET =
  `${LOCATION_ACTION}/${ACTION_RESET}`

export const locationSlice = createSlice({
  name: LOCATION_ACTION,
  initialState: {
    userInput: '',
    current: null,
    hints: []
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
    [ACTION_RESET]: state => {
      state.userInput = ''
      state.current = null
      state.hints = []
    }
  }
})

export const {
  setUserInputLocation,
  setHintLocations,
  setSelectedLocation,
  resetLocation
} = locationSlice.actions

export default locationSlice.reducer
