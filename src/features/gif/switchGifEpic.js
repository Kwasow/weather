import { ofType } from 'redux-observable'
import { interval } from 'rxjs'
import { map, switchMap, takeUntil } from 'rxjs/operators'
import {
  WEATHER_GIF_ACTION_NEXT,
  WEATHER_GIF_ACTION_RESET,
  WEATHER_GIF_ACTION_SET
} from './weatherGifSlice'

// 30 seconds in milliseconds
const gifRefreshInterval = 1000 * 30

export const switchGifEpic = action$ => {
  return action$.pipe(
    ofType(WEATHER_GIF_ACTION_SET),
    switchMap(() => interval(gifRefreshInterval).pipe(
      map(() => { return { type: WEATHER_GIF_ACTION_NEXT } }),
      takeUntil(action$.pipe(
        ofType(WEATHER_GIF_ACTION_RESET, WEATHER_GIF_ACTION_SET)
      ))
    ))
  )
}
