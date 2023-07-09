import { createSlice } from '@reduxjs/toolkit'

const THEME_ACTION = 'theme'
const ACTION_SWITCH = 'switchTheme'

export const THEME_ACTION_SWITCH = `${THEME_ACTION}/${ACTION_SWITCH}`

export const themeSlice = createSlice({
  name: THEME_ACTION,
  initialState: {
    isLight: false
  },
  reducers: {
    [ACTION_SWITCH]: state => {
      state.isLight = !state.isLight
    }
  }
})

export const { switchTheme } = themeSlice.actions

export default themeSlice.reducer
