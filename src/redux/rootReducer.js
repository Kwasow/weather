import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/slice'
import locationReducer from '../features/search/slice'
import weatherReducer from '../features/weather/slice'
import tabReducer from '../features/weatherTabs/slice'
import requestCounterReducer from '../features/requestCounter/slice'
import weatherGifReducer from '../features/weatherGif/slice'
import cacheReducer from '../features/cache/slice'

const rootReducer = combineReducers({
  theme: themeReducer,
  location: locationReducer,
  weather: weatherReducer,
  tab: tabReducer,
  requestCounter: requestCounterReducer,
  weatherGif: weatherGifReducer,
  cache: cacheReducer
})

export default rootReducer
