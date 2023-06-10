import { createSlice } from '@reduxjs/toolkit'

export const THEME_ACTION = 'theme'
export const THEME_ACTION_SWITCH = `${THEME_ACTION}/change`

export const themeSlice = createSlice({
  name: THEME_ACTION,
  initialState: {
    isLight: true
  },
  reducers: {
    change: state => {
      state.isLight = !state.isLight
    }
  }
})

export const { change } = themeSlice.actions

export default themeSlice.reducer
