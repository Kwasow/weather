import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import locationReducer from './locationSlice'
import weatherReducer from './weatherSlice'
import tabSlice from './tabSlice'

const rootReducer = combineReducers({
  theme: themeReducer,
  location: locationReducer,
  weather: weatherReducer,
  tab: tabSlice
})

export default rootReducer
