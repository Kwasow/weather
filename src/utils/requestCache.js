import {
  requestCounterDecrease,
  requestCounterIncrease
} from '../redux/reducers/requestCounterSlice'
import store from '../redux/setupStore'
import { WEATHER_API_FORECAST } from './consts'

// Cache stores: request -> { timestamp, response }
const cache = new Map()
const minutes15 = 1000 * 60 * 15

export async function fetchWithCache(url) {
  store.dispatch(requestCounterIncrease())
  
  const now = Date.now()
  let result = cache.get(url)

  const weatherDataOld = (
    url.includes(WEATHER_API_FORECAST)
    && result !== undefined
    && now - result.timestamp > minutes15
  )

  try {
    if (result === undefined || weatherDataOld) {
      result = await (await fetch(url)).json()
      cache.set(url, {
        timestamp: now,
        response: result
      })
    } else {
      result = result.response
    }
  } finally {
    store.dispatch(requestCounterDecrease())
  }

  return result
}
