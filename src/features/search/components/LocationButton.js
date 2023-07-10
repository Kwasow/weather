import React from 'react'
import { useDispatch } from 'react-redux'
import { setLocationCoordinates } from '../slice'
import { IconLocation } from '../../../components/icons'
import {
  requestCounterDecrease,
  requestCounterIncrease
} from '../../requestCounter/slice'
import { IconButton } from '../../../components'

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
