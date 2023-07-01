import { combineEpics } from 'redux-observable'
import { locationHintsEpic } from './locationHintsEpic'
import { resetWeatherEpic } from './resetWeatherEpic'
import {
  loadLocationWeatherEpic,
  loadCoordinatesLocationEpic
} from './loadWeatherEpic'
import { tabSelectorEpic } from './tabSelectorEpic'
import { niceWeatherEpic } from './niceWeatherEpic'
import { loadGifEpic } from './loadGifEpic'
import { resetGifsEpic } from './resetGifsEpic'

const rootEpic = combineEpics(
  locationHintsEpic,
  resetWeatherEpic,
  loadLocationWeatherEpic,
  loadCoordinatesLocationEpic,
  tabSelectorEpic,
  niceWeatherEpic,
  loadGifEpic,
  resetGifsEpic
)

export default rootEpic
