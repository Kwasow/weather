import { combineEpics } from 'redux-observable'
import { locationHintsEpic } from './locationHintsEpic'
import { resetWeatherEpic } from './resetWeatherEpic'
import {
  loadLocationWeatherEpic,
  loadCoordinatesLocationEpic
} from './loadWeatherEpic'
import { tabSelectorEpic } from './tabSelectorEpic'

const rootEpic = combineEpics(
  locationHintsEpic,
  resetWeatherEpic,
  loadLocationWeatherEpic,
  loadCoordinatesLocationEpic,
  tabSelectorEpic
)

export default rootEpic
