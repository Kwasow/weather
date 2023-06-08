import { ofType } from 'redux-observable'
import { COUNTER_ACTION_INCREMENT } from '../reducers/counterSlice'
import { mergeMap } from 'rxjs/operators'

export const isEvenEpic = (action$, state$) => action$.pipe(
  ofType(COUNTER_ACTION_INCREMENT),
  mergeMap(() => {
    return fetch(
      `https://api.isevenapi.xyz/api/iseven/${state$.value.counter.value}`
    )
      .then(res => res.json())
      .then(res => {
        return {
          type: 'isEven/set',
          payload: res.iseven
        }
      })
  })
)
