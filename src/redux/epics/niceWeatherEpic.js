import { ofType } from 'redux-observable'
import { map } from 'rxjs/operators'
import {
  WEATHER_ACTION_SET_CURRENT,
  WEATHER_ACTION_SET_NICENESS,
  WeatherNiceness
} from '../reducers/weatherSlice'

const MIN_AVG_TEMP = 18
const MAX_AVG_TEMP = 25
const MIN_TEMP = 15
const MAX_TEMP = 30

export const niceWeatherEpic = (action$, state$) => action$.pipe(
  ofType(WEATHER_ACTION_SET_CURRENT),
  map(() => {
    const daysArray = state$.value.weather.longTerm
    let testsPassed = 0

    if (checkIfRainGood(daysArray)) testsPassed++
    if (checkIfAvgTempsGood(daysArray)) testsPassed++
    if (checkIfTempLimitsGood(daysArray)) testsPassed++

    return {
      type: WEATHER_ACTION_SET_NICENESS,
      payload: decideNiceness(testsPassed)
    }
  })
)

function checkIfRainGood(daysArray) {
  for (const day of daysArray) {
    if (day.day.daily_will_it_rain > 0) {
      return false
    }
  }

  return true
}

function checkIfAvgTempsGood(daysArray) {
  for (const day of daysArray) {
    if (
      day.day.avgtemp_c < MIN_AVG_TEMP
      || day.day.avgtemp_c > MAX_AVG_TEMP
    ) {
      return false
    }
  }

  return true
}

function checkIfTempLimitsGood(daysArray) {
  for (const day of daysArray) {
    for (const hour of day.hour) {
      if (hour.temp_c < MIN_TEMP || hour.temp_c > MAX_TEMP) {
        return false
      }
    }
  }

  return true
}

function decideNiceness(testsPassed) {
  if (testsPassed === 3) return WeatherNiceness.Nice
  if (testsPassed === 2) return WeatherNiceness.Passable
  return WeatherNiceness.NotNice
}
