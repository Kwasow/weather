import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import isEvenReducer from './isEvenSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  isEven: isEvenReducer
})

export default rootReducer