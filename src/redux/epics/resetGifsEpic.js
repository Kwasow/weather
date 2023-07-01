import { ofType } from 'redux-observable'
import { map } from 'rxjs/operators'
import { LOCATION_ACTION_RESET } from '../reducers/locationSlice'
import { WEATHER_GIF_ACTION_RESET } from '../reducers/weatherGifSlice'

export const resetGifsEpic = (action$) => action$.pipe(
  ofType(LOCATION_ACTION_RESET),
  map(() => { return { type: WEATHER_GIF_ACTION_RESET } })
)
