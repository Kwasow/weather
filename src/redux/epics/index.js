import { combineEpics } from 'redux-observable'
import { locationHintsEpic } from './locationHintsEpic'

const rootEpic = combineEpics(
  locationHintsEpic
)

export default rootEpic
