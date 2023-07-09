import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/themeSlice'
import locationReducer from '../features/search/locationSlice'
import weatherReducer from '../features/weather/weatherSlice'
import tabReducer from '../features/weatherTabs/tabSlice'
import requestCounterReducer from './reducers/requestCounterSlice'
import weatherGifReducer from '../features/gif/weatherGifSlice'

const rootReducer = combineReducers({
  theme: themeReducer,
  location: locationReducer,
  weather: weatherReducer,
  tab: tabReducer,
  requestCounter: requestCounterReducer,
  weatherGif: weatherGifReducer
})

export default rootReducer
