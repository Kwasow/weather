import { createSlice } from '@reduxjs/toolkit'

const TAB_ACTION = 'tab'
const ACTION_SWITCH = 'switchTab'

export const TAB_ACTION_SWITCH = `${TAB_ACTION}/${ACTION_SWITCH}`

export const tabSlice = createSlice({
  name: TAB_ACTION,
  initialState: {
    current: 0
  },
  reducers: {
    [ACTION_SWITCH]: (state, action) => {
      state.current = action.payload
    }
  }
})

export const { switchTab } = tabSlice.actions

export default tabSlice.reducer
