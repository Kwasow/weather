import { createSlice } from '@reduxjs/toolkit'

const WEATHER_GIF_ACTION = 'weatherGif'
const ACTION_SET_GIFS = 'setGifs'
const ACTION_NEXT_GIF = 'nextGif'
const ACTION_RESET_GIFS = 'resetGifs'

export const WEATHER_GIF_ACTION_SET =
  `${WEATHER_GIF_ACTION}/${ACTION_SET_GIFS}`
export const WEATHER_GIF_ACTION_NEXT =
  `${WEATHER_GIF_ACTION}/${ACTION_NEXT_GIF}`
export const WEATHER_GIF_ACTION_RESET =
  `${WEATHER_GIF_ACTION}/${ACTION_RESET_GIFS}`

export const NO_GIFS = -1

export const weatherGifSlice = createSlice({
  name: WEATHER_GIF_ACTION,
  initialState: {
    gifs: [],
    currentIndex: NO_GIFS
  },
  reducers: {
    [ACTION_SET_GIFS]: (state, action) => {
      state.gifs = action.payload
      state.currentIndex = 0
    },
    [ACTION_NEXT_GIF]: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.gifs.length
    },
    [ACTION_RESET_GIFS]: state => {
      state.gifs = []
      state.currentIndex = NO_GIFS
    }
  }
})

export const { setGifs, nextGif, resetGifs } = weatherGifSlice.actions

export default weatherGifSlice.reducer
