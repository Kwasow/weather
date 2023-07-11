import { ofType } from 'redux-observable'
import { map, mergeMap, switchMap, takeUntil } from 'rxjs/operators'
import { interval } from 'rxjs'
import { fetchWithCache } from '../../utils/fetchWithCache'
import { TENOR_API_SEARCH } from '../../utils/consts'
import { TENOR_API_KEY } from '../../utils/secrets'
import {
  WEATHER_GIF_ACTION_NEXT,
  WEATHER_GIF_ACTION_RESET,
  WEATHER_GIF_ACTION_SET
} from './slice'
import { WEATHER_ACTION_SET_CURRENT } from '../weather/slice'
import { LOCATION_ACTION_RESET } from '../search/slice'

/* =============================== loadGifEpic ============================== */
export const loadGifEpic = (action$, state$) => action$.pipe(
  ofType(WEATHER_ACTION_SET_CURRENT),
  mergeMap(() => {
    const weatherType = state$.value.weather.current.condition.text
    const url = `${TENOR_API_SEARCH}?key=${TENOR_API_KEY}&q=${weatherType}`

    return fetchWithCache(url)
      .then(res => {
        return {
          type: WEATHER_GIF_ACTION_SET,
          payload: res.error ? [] : res.results
        }
      })
      .catch(err => {
        console.error(err)

        return {
          type: WEATHER_GIF_ACTION_SET,
          payload: []
        }
      })
  })
)

/* ============================== resetGifsEpic ============================= */
export const resetGifsEpic = (action$) => action$.pipe(
  ofType(LOCATION_ACTION_RESET),
  map(() => { return { type: WEATHER_GIF_ACTION_RESET } })
)

/* ============================== switchGifEpic ============================= */
// 30 seconds in milliseconds
const gifRefreshInterval = 1000 * 30

export const switchGifEpic = action$ => action$.pipe(
  ofType(WEATHER_GIF_ACTION_SET),
  switchMap(() => interval(gifRefreshInterval).pipe(
    map(() => { return { type: WEATHER_GIF_ACTION_NEXT } }),
    takeUntil(action$.pipe(
      ofType(WEATHER_GIF_ACTION_RESET, WEATHER_GIF_ACTION_SET)
    ))
  ))
)
