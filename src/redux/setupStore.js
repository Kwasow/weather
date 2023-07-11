import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './rootEpic'
import { enableMapSet } from 'immer'

const DEBUG = true

enableMapSet()
const epicMiddleware = createEpicMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
  devTools: DEBUG
})

epicMiddleware.run(rootEpic)

export default store
