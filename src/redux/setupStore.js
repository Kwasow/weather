import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/index'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epics'

const DEBUG = true

const epicMiddleware = createEpicMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
  devTools: DEBUG
})

epicMiddleware.run(rootEpic)

export default store
