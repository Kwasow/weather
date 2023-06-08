import { createSlice } from '@reduxjs/toolkit'

export const IS_EVEN_ACTION = 'isEven'
export const IS_EVEN_ACTION_SET = 'isEven/set'

export const isEvenSlice = createSlice({
  name: IS_EVEN_ACTION,
  initialState: {
    value: true
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { set } = isEvenSlice.actions

export default isEvenSlice.reducer
