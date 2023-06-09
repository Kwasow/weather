import { createSlice } from '@reduxjs/toolkit'
import { Themes } from '../../utils/theme'

export const THEME_ACTION = 'theme'
export const THEME_ACTION_SWITCH = `${THEME_ACTION}/change`

export const themeSlice = createSlice({
  name: THEME_ACTION,
  initialState: {
    value: Themes.LIGHT,
    light: true
  },
  reducers: {
    change: state => {
      state.value = state.light ? Themes.DARK : Themes.LIGHT
      state.light = !state.light
    }
  }
})

export const { change } = themeSlice.actions

export default themeSlice.reducer
