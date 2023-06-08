import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/index'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epics'

const epicMiddleware = createEpicMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
  devTools: process.env.NODE_ENV !== 'production'
})

epicMiddleware.run(rootEpic)

export default store
