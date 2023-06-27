import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setLocationCoordinates } from '../redux/reducers/locationSlice'
import { IconLocation, StyledIcon } from './icons/index'
import {
  requestCounterDecrease,
  requestCounterIncrease
} from '../redux/reducers/requestCounterSlice'

export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  border-radius: 50vh;
  border: 0px;
  cursor: pointer;
  color: ${props => props.theme.onPrimary};
  font-size: 0.9rem;
  font-weight: bold;
  padding: 15px;
  text-transform: uppercase;
`

const InvisibleButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  text-transform: uppercase;
  font-weight: bold;

  border: none;
  outline: none;
  background-color: transparent;

  border-radius: 1vh;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.onSurfaceHover};
  }
`

const IconLabel = styled.p`
  color: ${props => props.theme.primary};
  padding: 5px;
`

export function IconButton({ icon: Icon, onClick, label }) {
  return (
    <InvisibleButton onClick={onClick}>
      <StyledIcon icon={Icon}/>
      <IconLabel>{label}</IconLabel>
    </InvisibleButton>
  )
}

const options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
}

export function LocationButton() {
  const dispatch = useDispatch()

  function locationOnSuccess(position) {
    dispatch(requestCounterDecrease())

    var coordinates = position.coords

    dispatch(setLocationCoordinates({
      latitude: coordinates.latitude.toFixed(4),
      longitude: coordinates.longitude.toFixed(4)
    }))
  }

  function locationOnError() {
    dispatch(requestCounterDecrease())

    console.error('Failed to get location')
  }

  function onLocationChange() {
    dispatch(requestCounterIncrease())

    navigator.geolocation.getCurrentPosition(
      locationOnSuccess, locationOnError, options
    )
  }
  
  function locate() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(result => {
          onLocationChange(result)
  
          result.onchange = onLocationChange
        })
    } else {
      alert('Location is not available')
    }
  }

  return (
    <IconButton
      icon={IconLocation}
      label='Locate me'
      onClick={locate}/>
  )
}
