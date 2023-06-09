import { createSlice } from '@reduxjs/toolkit'

export const COUNTER_ACTION = 'counter'
export const COUNTER_ACTION_INCREMENT = `${COUNTER_ACTION}/increment`
export const COUNTER_ACTION_DECREMENT = `${COUNTER_ACTION}/decrement`

export const counterSlice = createSlice({
  name: COUNTER_ACTION,
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
