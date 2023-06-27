import { combineEpics } from 'redux-observable'
import { locationHintsEpic } from './locationHintsEpic'
import { resetWeatherEpic } from './resetWeatherEpic'
import {
  loadLocationWeatherEpic,
  loadCoordinatesLocationEpic
} from './loadWeatherEpic'
import { tabSelectorEpic } from './tabSelectorEpic'
import { niceWeatherEpic } from './niceWeatherEpic'

const rootEpic = combineEpics(
  locationHintsEpic,
  resetWeatherEpic,
  loadLocationWeatherEpic,
  loadCoordinatesLocationEpic,
  tabSelectorEpic,
  niceWeatherEpic
)

export default rootEpic
