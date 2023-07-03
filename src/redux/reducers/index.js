import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import locationReducer from './locationSlice'
import weatherReducer from './weatherSlice'
import tabReducer from './tabSlice'
import requestCounterReducer from './requestCounterSlice'
import weatherGifReducer from './weatherGifSlice'

const rootReducer = combineReducers({
  theme: themeReducer,
  location: locationReducer,
  weather: weatherReducer,
  tab: tabReducer,
  requestCounter: requestCounterReducer,
  weatherGif: weatherGifReducer
})

export default rootReducer
