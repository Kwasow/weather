import { ofType } from 'redux-observable'
import {
  LOCATION_ACTION_SET_COORDINATES,
  LOCATION_ACTION_SET_SELECTED_LOCATION
} from '../reducers/locationSlice'
import { mergeMap } from 'rxjs/operators'
import { WEATHER_ACTION_SET_CURRENT } from '../reducers/weatherSlice'
import { WEATHER_API_FORECAST, WEATHER_API_SEARCH } from '../../utils/consts'
import { WEATHER_API_KEY } from '../../utils/secrets'
import { fetchWithCache } from '../../utils/requestCache'

export const loadLocationWeatherEpic = (action$, state$) => action$.pipe(
  ofType(LOCATION_ACTION_SET_SELECTED_LOCATION),
  mergeMap(() => {
    const location = state$.value.location.current.url

    return fetchWithCache(
      `${WEATHER_API_FORECAST}?key=${WEATHER_API_KEY}&q=${location}&days=3`
    )
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
