import { ofType } from 'redux-observable'
import {
  LOCATION_ACTION_SET_USER_INPUT,
  LOCATION_ACTION_SET_HINTS,
  LOCATION_ACTION_SET_COORDINATES,
  LOCATION_ACTION_LOAD_COORDINATES,
  LOCATION_ACTION_LOAD_COORDINATES_CANCEL
} from './slice'
import { Observable } from 'rxjs'
import { mergeMap } from 'rxjs/operators'
import { WEATHER_API_SEARCH } from '../../utils/consts'
import { WEATHER_API_KEY } from '../../utils/secrets'
import { fetchWithCache } from '../../utils/fetchWithCache'

/* ============================ locationHintsEpic =========================== */
export const locationHintsEpic = (action$, state$) => action$.pipe(
  ofType(LOCATION_ACTION_SET_USER_INPUT),
  mergeMap(() => {
    const url =
      `${WEATHER_API_SEARCH}
      ?key=${WEATHER_API_KEY}
      &q=${state$.value.location.userInput}`

    return fetchWithCache(url)
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

/* =========================== loadCoordinatesEpic ========================== */
const options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
}

export const loadCoordinatesEpic = (action$) => action$.pipe(
  ofType(LOCATION_ACTION_LOAD_COORDINATES),
  mergeMap(() => {
    return new Observable(subscriber => {
      function onSuccess(position) {  
        var coordinates = position.coords
    
        subscriber.next({
          type: LOCATION_ACTION_SET_COORDINATES,
          payload: {
            latitude: coordinates.latitude.toFixed(4),
            longitude: coordinates.longitude.toFixed(4)
          }
        })
        subscriber.complete()
      }
    
      function onError() {  
        alert('Failed to get location')

        subscriber.next({ type: LOCATION_ACTION_LOAD_COORDINATES_CANCEL })
        subscriber.complete()
      }
    
      function onLocationChange() {  
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
      }
  
      if (navigator.geolocation) {
        navigator.permissions
          .query({ name: 'geolocation' })
          .then(result => {
            onLocationChange(result)
    
            result.onchange = onLocationChange
          })
      } else {
        onError()
      }
    })
  })
)
