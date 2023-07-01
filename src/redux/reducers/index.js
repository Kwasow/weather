import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import locationReducer from './locationSlice'
import weatherReducer from './weatherSlice'
import tabSlice from './tabSlice'
import requestCounterSlice from './requestCounterSlice'
import weatherGifSlice from './weatherGifSlice'

const rootReducer = combineReducers({
  theme: themeReducer,
  location: locationReducer,
  weather: weatherReducer,
  tab: tabSlice,
  requestCounter: requestCounterSlice,
  weatherGif: weatherGifSlice
})

export default rootReducer
