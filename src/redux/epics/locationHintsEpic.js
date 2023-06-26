import { ofType } from 'redux-observable'
import {
  LOCATION_ACTION_SET_USER_INPUT,
  LOCATION_ACTION_SET_HINTS
} from '../reducers/locationSlice'
import { mergeMap } from 'rxjs/operators'
import { WEATHER_API_SEARCH } from '../../utils/consts'
import { WEATHER_API_KEY } from '../../utils/secrets'
import { fetchWithCache } from '../../utils/requestCache'

export const locationHintsEpic = (action$, state$) => action$.pipe(
  ofType(LOCATION_ACTION_SET_USER_INPUT),
  mergeMap(() => {
    return fetchWithCache(
      `${WEATHER_API_SEARCH}
        ?key=${WEATHER_API_KEY}
        &q=${state$.value.location.userInput}`
    )
      .then(res => {
        return {
          type: LOCATION_ACTION_SET_HINTS,
          payload: res.error ? [] : res
        }
      })
      .catch(err => {
        console.error(err)
        return {
          type: LOCATION_ACTION_SET_HINTS,
          payload: []
        }
      })
  })
)
