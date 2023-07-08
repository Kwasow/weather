import { combineEpics } from 'redux-observable'
import { locationHintsEpic } from './locationHintsEpic'
import { resetWeatherEpic } from './resetWeatherEpic'
import {
  loadLocationWeatherEpic,
  loadCoordinatesLocationEpic
} from './loadWeatherEpic'
import { tabSelectorEpic } from './tabSelectorEpic'
import { loadGifEpic } from './loadGifEpic'
import { resetGifsEpic } from './resetGifsEpic'
import { switchGifEpic } from './switchGifEpic'

const rootEpic = combineEpics(
  locationHintsEpic,
  resetWeatherEpic,
  loadLocationWeatherEpic,
  loadCoordinatesLocationEpic,
  tabSelectorEpic,
  loadGifEpic,
  resetGifsEpic,
  switchGifEpic
)

export default rootEpic
