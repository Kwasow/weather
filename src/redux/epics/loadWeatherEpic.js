import { ofType } from 'redux-observable'
import {
  LOCATION_ACTION_SET_COORDINATES,
  LOCATION_ACTION_SET_SELECTED_LOCATION
} from '../reducers/locationSlice'
import { mergeMap } from 'rxjs/operators'
import { WEATHER_ACTION_SET_CURRENT } from '../reducers/weatherSlice'
import { WEATHER_API_FORECAST } from '../../utils/consts'
import { WEATHER_API_KEY } from '../../utils/secrets'

export const loadWeatherEpic = (action$, state$) => action$.pipe(
  ofType(
    LOCATION_ACTION_SET_SELECTED_LOCATION,
    LOCATION_ACTION_SET_COORDINATES
  ),
  mergeMap(() => {
    const location = action$.type == LOCATION_ACTION_SET_SELECTED_LOCATION
      ? state$.value.location.current.name
      : `${state$.value.location.latitude},${state$.value.location.longitude}}`

    return fetch(
      `${WEATHER_API_FORECAST}?key=${WEATHER_API_KEY}&q=${location}&days=3`
    )
      .then(res => res.json())
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
