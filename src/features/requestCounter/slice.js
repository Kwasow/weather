import { createSlice } from '@reduxjs/toolkit'

const REQUEST_COUNTER_ACTION = 'requestCounter'
const ACTION_INCREASE = 'requestCounterIncrease'
const ACTION_DECREASE = 'requestCounterDecrease'

export const REQUEST_COUNTER_ACTION_INCREASE =
  `${REQUEST_COUNTER_ACTION}/${ACTION_INCREASE}`
export const REQUEST_COUNTER_ACTION_DECREASE =
  `${REQUEST_COUNTER_ACTION}/${ACTION_DECREASE}`

export const requestCounterSlice = createSlice({
  name: REQUEST_COUNTER_ACTION,
  initialState: {
    runningRequests: 0
  },
  reducers: {
    [ACTION_INCREASE]: state => {
      state.runningRequests = state.runningRequests + 1
    },
    [ACTION_DECREASE]: state => {
      state.runningRequests = state.runningRequests - 1
    }
  }
})

export const {
  requestCounterIncrease,
  requestCounterDecrease
} = requestCounterSlice.actions

export default requestCounterSlice.reducer
