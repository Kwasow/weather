import { ofType } from 'redux-observable'
import {
  LOCATION_ACTION_SET_COORDINATES,
  LOCATION_ACTION_SET_SELECTED_LOCATION,
  LOCATION_ACTION_RESET
} from '../location/slice'
import { map, mergeMap } from 'rxjs/operators'
import { WEATHER_ACTION_SET_CURRENT } from './slice'
import { WEATHER_API_FORECAST, WEATHER_API_SEARCH } from '../../utils/consts'
import { WEATHER_API_KEY } from '../../utils/secrets'
import { fetchWithCache } from '../../utils/fetchWithCache'
import { WEATHER_ACTION_RESET } from './slice'

/* ======================= loadCoordinatesLocationEpic ====================== */
export const loadCoordinatesLocationEpic = (action$, state$) => action$.pipe(
  ofType(LOCATION_ACTION_SET_COORDINATES),
  mergeMap(() => {
    const location =
      `${state$.value.location.latitude},${state$.value.location.longitude}`

    return fetchWithCache(
      `${WEATHER_API_SEARCH}?key=${WEATHER_API_KEY}&q=${location}&days=3`
    )
      .then(res => {
        return {
          type: LOCATION_ACTION_SET_SELECTED_LOCATION,
          payload: res.error ? null : res[0]
        }
      })
      .catch(err => {
        console.error(err)
        return {
          type: LOCATION_ACTION_SET_SELECTED_LOCATION,
          payload: null
        }
      })
  })
)

/* ========================= loadLocationWeatherEpic ======================== */
export const loadLocationWeatherEpic = (action$, state$) => action$.pipe(
  ofType(LOCATION_ACTION_SET_SELECTED_LOCATION),
  mergeMap(() => {
    const location = state$.value.location.current.name + ' ' +
      state$.value.location.current.country
    const url =
      `${WEATHER_API_FORECAST}?key=${WEATHER_API_KEY}&q=${location}&days=3`

    return fetchWithCache(url)
      .then(res => {
        return {
          type: WEATHER_ACTION_SET_CURRENT,
          payload: res.error ? null : res
        }
      })
      .catch(err => {
        console.error(err)
        return {
          type: WEATHER_ACTION_SET_CURRENT,
          payload: null
        }
      })
  })
)

/* ============================ resetWeatherEpic ============================ */
export const resetWeatherEpic = (action$) => action$.pipe(
  ofType(LOCATION_ACTION_RESET),
  map(() => { return { type: WEATHER_ACTION_RESET } })
)
