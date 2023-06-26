import { combineEpics } from 'redux-observable'
import { locationHintsEpic } from './locationHintsEpic'
import { resetWeatherEpic } from './resetWeatherEpic'
import {
  loadCoordinatesWeatherEpic,
  loadLocationWeatherEpic
} from './loadWeatherEpic'
import { tabSelectorEpic } from './tabSelectorEpic'

const rootEpic = combineEpics(
  locationHintsEpic,
  resetWeatherEpic,
  loadLocationWeatherEpic,
  loadCoordinatesWeatherEpic,
  tabSelectorEpic
)

export default rootEpic
