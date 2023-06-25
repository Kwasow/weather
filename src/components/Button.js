import React from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Row } from './index'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { setLocationCoordinates } from '../redux/reducers/locationSlice'

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

export const InvisibleButton = styled.button`
`

const IconLabel = styled.p`
  color: ${props => props.theme.primary};
`

const options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
}

export function LocationButton() {
  const themeContext = useContext(ThemeContext)
  const dispatch = useDispatch()

  function locationOnSuccess(pos) {
    var coordinates = pos.coords

    dispatch(setLocationCoordinates({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude
    }))
  }

  function onLocationChange() {
    navigator.geolocation.getCurrentPosition(
      locationOnSuccess, undefined, options
    )
  }
  
  function locate() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function (result) {
          onLocationChange(result)
  
          result.onchange = onLocationChange
        })
    } else {
      alert('Location is not available')
    }
  }

  return (
    <InvisibleButton onClick={locate}>
      <Row>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48">
          
          <path
            fill={themeContext.primary}
            // eslint-disable-next-line max-len
            d="M447.37-36.26v-75.001Q309.891-125.5 217.576-217.815T111.261-447.37h-75v-65.26h75Q125.5-650.109 217.815-742.424T447.37-848.739v-75h65.26v75q137.24 14 229.555 106.315T848.739-512.63h75v65.26h-75q-14 137.24-106.315 229.555T512.63-111.261v75h-65.26Zm32.589-141.892q124.324 0 213.106-88.742 88.783-88.741 88.783-213.065t-88.742-213.106q-88.741-88.783-213.065-88.783t-213.106 88.742q-88.783 88.741-88.783 213.065t88.742 213.106q88.741 88.783 213.065 88.783ZM480-330q-63 0-106.5-43.5T330-480q0-63 43.5-106.5T480-630q63 0 106.5 43.5T630-480q0 63-43.5 106.5T480-330Z"/>

        </svg>
        <IconLabel>Locate me</IconLabel>
      </Row>
    </InvisibleButton>
  )
}
