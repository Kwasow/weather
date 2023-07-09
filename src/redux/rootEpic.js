import { combineEpics } from 'redux-observable'
import { locationHintsEpic } from '../features/search/locationHintsEpic'
import { resetWeatherEpic } from '../features/weather/resetWeatherEpic'
import {
  loadLocationWeatherEpic,
  loadCoordinatesLocationEpic
} from '../features/weather/loadWeatherEpic'
import { tabSelectorEpic } from '../features/weatherTabs/tabSelectorEpic'
import { loadGifEpic } from '../features/gif/loadGifEpic'
import { resetGifsEpic } from '../features/gif/resetGifsEpic'
import { switchGifEpic } from '../features/gif/switchGifEpic'

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
