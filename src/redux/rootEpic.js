import { combineEpics } from 'redux-observable'
import { locationHintsEpic } from '../features/search/middleware'
import {
  loadLocationWeatherEpic,
  loadCoordinatesLocationEpic,
  resetWeatherEpic
} from '../features/weather/middleware'
import { tabSelectorEpic } from '../features/weatherTabs/middleware'
import {
  loadGifEpic,
  resetGifsEpic,
  switchGifEpic
} from '../features/weatherGif/middleware'

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
