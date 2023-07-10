import {
  requestCounterDecrease,
  requestCounterIncrease
} from '../features/requestCounter/slice'
import store from '../redux/setupStore'
import { WEATHER_API_FORECAST } from './consts'

// Cache stores: request -> { timestamp, response }
const cache = new Map()
const minutes15 = 1000 * 60 * 15

export async function fetchWithCache(url) {
  store.dispatch(requestCounterIncrease())

  let result = getCachedResult(url)

  try {
    if (result === undefined) {
      result = await (await fetch(url)).json()
      cache.set(url, {
        timestamp: Date.now(),
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

function getCachedResult(url) {
  const result = cache.get(url)
  const now = Date.now()
  
  const weatherDataOld = (
    url.includes(WEATHER_API_FORECAST)
    && result !== undefined
    && now - result.timestamp > minutes15
  )

  if (weatherDataOld) {
    return undefined
  } else {
    return result
  }
}
