import React from 'react'
import { useDispatch } from 'react-redux'
import { loadLocationCoordinates } from '../slice'
import { IconLocation } from '../../../components/icons'
import { IconButton } from '../../../components'

export function LocationButton() {
  const dispatch = useDispatch()

  return (
    <IconButton
      icon={IconLocation}
      label='Locate me'
      onClick={() => dispatch(loadLocationCoordinates())}/>
  )
}
