import { createSlice } from '@reduxjs/toolkit'

export const IS_EVEN_ACTION = 'isEven'
const ACTION_SET = 'set'
export const IS_EVEN_ACTION_SET = `${IS_EVEN_ACTION}/${ACTION_SET}`

export const isEvenSlice = createSlice({
  name: IS_EVEN_ACTION,
  initialState: {
    value: true
  },
  reducers: {
    [ACTION_SET]: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { set } = isEvenSlice.actions

export default isEvenSlice.reducer
