import { createSlice } from '@reduxjs/toolkit'

export const COUNTER_ACTION = 'counter'
const ACTION_INCREMENT = 'increment'
export const COUNTER_ACTION_INCREMENT = `${COUNTER_ACTION}/${ACTION_INCREMENT}`
const ACTION_DECREMENT = 'decrement'
export const COUNTER_ACTION_DECREMENT = `${COUNTER_ACTION}/${ACTION_DECREMENT}`

export const counterSlice = createSlice({
  name: COUNTER_ACTION,
  initialState: {
    value: 0
  },
  reducers: {
    [ACTION_INCREMENT]: state => {
      state.value += 1
    },
    [ACTION_DECREMENT]: state => {
      state.value -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
