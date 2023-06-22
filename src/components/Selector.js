import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  resetLocation,
  setSelectedLocation,
  setUserInputLocation
} from '../redux/reducers/locationSlice'

export const StyledSelector = styled(Select)`
  width: 20%;
`

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
      dispatch(setUserInputLocation(newValue))
    }}
    onChange={(newValue) => {
      if (newValue !== null) {
        dispatch(setSelectedLocation(hints[newValue.index]))
      } else {
        dispatch(resetLocation())
      }
    }}/>
}
