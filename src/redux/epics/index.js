import { combineEpics } from 'redux-observable'
import { isEvenEpic } from './isEvenEpic'

const rootEpic = combineEpics(
  isEvenEpic
)

export default rootEpic
