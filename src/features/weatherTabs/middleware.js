import { ofType } from 'redux-observable'
import { map } from 'rxjs/operators'
import { WEATHER_ACTION_SET_CURRENT } from '../weather/slice'
import { TAB_ACTION_SWITCH } from './slice'

/* ============================= tabSelectorEpic ============================ */
export const tabSelectorEpic = (action$, state$) => action$.pipe(
  ofType(WEATHER_ACTION_SET_CURRENT),
  map(() => {
    const currentTab = state$.value.tab.current

    return { 
      type: TAB_ACTION_SWITCH,
      payload: currentTab === 0 ? 1 : currentTab
    }
  })
)
