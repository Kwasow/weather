import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import isEvenReducer from './isEvenSlice'
import themeReducer from './themeSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  isEven: isEvenReducer,
  theme: themeReducer
})

export default rootReducer
