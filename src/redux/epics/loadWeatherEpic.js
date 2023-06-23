import { ofType } from 'redux-observable'
import {
  LOCATION_ACTION_SET_SELECTED_LOCATION
} from '../reducers/locationSlice'
import { mergeMap } from 'rxjs/operators'
import { WEATHER_ACTION_SET_CURRENT } from '../reducers/weatherSlice'
import { WEATHER_API_FORECAST } from '../../utils/consts'
import { WEATHER_API_KEY } from '../../utils/secrets'

export const loadWeatherEpic = (action$, state$) => action$.pipe(
  ofType(LOCATION_ACTION_SET_SELECTED_LOCATION),
  mergeMap(() => {
    return fetch(
      `${WEATHER_API_FORECAST}
        ?key=${WEATHER_API_KEY}
        &q=${state$.value.location.current.name}
        &day=3`
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
