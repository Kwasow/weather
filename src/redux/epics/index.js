import { combineEpics } from 'redux-observable'
import { locationHintsEpic } from './locationHintsEpic'
import { resetWeatherEpic } from './resetWeatherEpic'
import { loadWeatherEpic } from './loadWeatherEpic'

const rootEpic = combineEpics(
  locationHintsEpic,
  resetWeatherEpic,
  loadWeatherEpic
)

export default rootEpic
