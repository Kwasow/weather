import { ofType } from 'redux-observable'
import { COUNTER_ACTION_DECREMENT, COUNTER_ACTION_INCREMENT } from '../reducers/counterSlice'
import { mergeMap } from 'rxjs/operators'
import { IS_EVEN_ACTION_SET } from '../reducers/isEvenSlice'

export const isEvenEpic = (action$, state$) => action$.pipe(
  ofType(COUNTER_ACTION_INCREMENT, COUNTER_ACTION_DECREMENT),
  mergeMap(() => {
    return fetch(
      `https://api.isevenapi.xyz/api/iseven/${state$.value.counter.value}`
    )
      .then(res => res.json())
      .then(res => {
        return {
          type: IS_EVEN_ACTION_SET,
          payload: res.iseven
        }
      })
      .catch(err => {
        console.error(err)
        return {
          type: IS_EVEN_ACTION_SET,
          payload: 'unknown'
        }
      })
  })
)
