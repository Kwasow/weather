import {
  requestCounterDecrease,
  requestCounterIncrease
} from '../redux/reducers/requestCounterSlice'
import store from '../redux/setupStore'

const cache = new Map()

export async function fetchWithCache(url) {
  store.dispatch(requestCounterIncrease())
  
  let result = cache.get(url)
  
  try {
    if (result === undefined) {
      result = await (await fetch(url)).json()
      cache.set(url, result)
    }
  } finally {
    store.dispatch(requestCounterDecrease())
  }

  return result
}
