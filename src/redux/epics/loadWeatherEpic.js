import { ofType } from 'redux-observable'
import {
  LOCATION_ACTION_SET_COORDINATES,
  LOCATION_ACTION_SET_SELECTED_LOCATION
} from '../reducers/locationSlice'
import { mergeMap } from 'rxjs/operators'
import { WEATHER_ACTION_SET_CURRENT } from '../reducers/weatherSlice'
import { WEATHER_API_FORECAST } from '../../utils/consts'
import { WEATHER_API_KEY } from '../../utils/secrets'
import { fetchWithCache } from '../../utils/requestCache'

export const loadLocationWeatherEpic = (action$, state$) => action$.pipe(
  ofType(LOCATION_ACTION_SET_SELECTED_LOCATION),
  mergeMap(() => {
    return loadWeather(state$.value.location.current.name)
  })
)

export const loadCoordinatesWeatherEpic = (action$, state$) => action$.pipe(
  ofType(LOCATION_ACTION_SET_COORDINATES),
  mergeMap(() => {
    return loadWeather(
      `${state$.value.location.latitude},${state$.value.location.longitude}}`
    )
  })
)

async function loadWeather(location) {
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
}
