import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import locationReducer from './locationSlice'

const rootReducer = combineReducers({
  theme: themeReducer,
  location: locationReducer
})

export default rootReducer
