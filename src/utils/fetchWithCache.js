import { cacheAdd } from '../features/cache/slice'
import {
  requestCounterDecrease,
  requestCounterIncrease
} from '../features/requestCounter/slice'
import store from '../redux/setupStore'
import { WEATHER_API_FORECAST } from './consts'

const minutes15 = 1000 * 60 * 15

export async function fetchWithCache(url) {
  const dispatch = store.dispatch
  dispatch(requestCounterIncrease())

  let result = getCachedResult(url)

  try {
    if (result === undefined) {
      result = await (await fetch(url)).json()
      dispatch(cacheAdd({
        key: url,
        value: result
      }))
    } else {
      result = result.value
    }
  } finally {
    store.dispatch(requestCounterDecrease())
  }

  return result
}

function getCachedResult(url) {
  const cache = store.getState().cache.cache
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
