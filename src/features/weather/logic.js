const WeatherNiceness = {
  NotChecked: 'Not checked',
  NotNice: 'Not nice',
  Passable: 'Passable',
  Nice: 'Nice'
}

const MIN_AVG_TEMP = 18
const MAX_AVG_TEMP = 25
const MIN_TEMP = 15
const MAX_TEMP = 30

export function decideNiceness(daysArray) {
  let testsPassed = 0

  if (checkIfRainGood(daysArray)) testsPassed++
  if (checkIfAvgTempsGood(daysArray)) testsPassed++
  if (checkIfTempLimitsGood(daysArray)) testsPassed++

  if (testsPassed === 3) return WeatherNiceness.Nice
  if (testsPassed === 2) return WeatherNiceness.Passable
  return WeatherNiceness.NotNice
}

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
