import { combineEpics } from 'redux-observable'
import { locationHintsEpic } from './locationHintsEpic'
import { resetWeatherEpic } from './resetWeatherEpic'
import { loadWeatherEpic } from './loadWeatherEpic'
import { tabSelectorEpic } from './tabSelectorEpic'

const rootEpic = combineEpics(
  locationHintsEpic,
  resetWeatherEpic,
  loadWeatherEpic,
  tabSelectorEpic
)

export default rootEpic
