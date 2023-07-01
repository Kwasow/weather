import { ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
import { fetchWithCache } from '../../utils/requestCache'
import { TENOR_API_SEARCH } from '../../utils/consts'
import { TENOR_API_KEY } from '../../utils/secrets'
import { WEATHER_GIF_ACTION_SET } from '../reducers/weatherGifSlice'
import { WEATHER_ACTION_SET_CURRENT } from '../reducers/weatherSlice'

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
