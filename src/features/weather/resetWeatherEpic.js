import { ofType } from 'redux-observable'
import { map } from 'rxjs/operators'
import { LOCATION_ACTION_RESET } from '../search/locationSlice'
import { WEATHER_ACTION_RESET } from './weatherSlice'

export const resetWeatherEpic = (action$) => action$.pipe(
  ofType(LOCATION_ACTION_RESET),
  map(() => { return { type: WEATHER_ACTION_RESET } })
)
