import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  resetLocation,
  setSelectedLocation,
  setUserInputLocation
} from '../slice'
import { StyledSelector } from '../../../components'

export function CitySelector() {
  const dispatch = useDispatch()
  const hints = useSelector(state => state.location.hints)

  const options = hints.map((value, index) => {
    const name = value.name
    const country = value.country
    const region = value.region ? `, ${value.region}` : ''

    return {
      value: name,
      label: `${name} (${country}${region})`,
      index
    }
  })

  return <StyledSelector
    options={options}
    isClearable
    onInputChange={newValue => {
      if (newValue.length > 0) {
        dispatch(setUserInputLocation(newValue))
      }
    }}
    onChange={(newValue) => {
      if (newValue !== null) {
        dispatch(setSelectedLocation(hints[newValue.index]))
      } else {
        dispatch(resetLocation())
      }
    }}
    classNamePrefix="react-select"/>
}
