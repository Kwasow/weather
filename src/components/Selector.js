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

  .react-select__control {
    background-color: ${props => props.theme.surface};
  }

  .react-select__control:hover {
    border-color: ${props => props.theme.primary};
  }

  .react-select__control--is-focused {
    border-color: ${props => props.theme.primary};
  }

  .react-select__input-container {
    color: ${props => props.theme.onBackground}
  }

  .react-select__input-container {
    color: ${props => props.theme.onBackground}
  }

  .react-select__single-value {
    color: ${props => props.theme.onBackground}
  }

  .react-select__option {
    color: ${props => props.theme.onBackground};
  }

  .react-select__option:hover {
    background-color: ${props => props.theme.primarySelected};
  }

  .react-select__option--is-focused {
    background-color: ${props => props.theme.primarySelected};
  }

  .react-select__option--is-selected {
    background-color: ${props => props.theme.primarySelected};
  }

  .react-select__menu {
    background-color: ${props => props.theme.surface};
    color: ${props => props.theme.onSurface};
    border: 1px solid ${props => props.theme.onBackgroundBorder};
    border-opacity: 50%;
  }
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
    }}
    classNamePrefix="react-select"/>
}
