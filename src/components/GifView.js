import React from 'react'
import { useSelector } from 'react-redux'
import { Video } from './index'

export function GifView() {
  const gifs = useSelector(state => state.weatherGif.gifs)
  const currentIndex = useSelector(state => state.weatherGif.currentIndex)

  if (currentIndex === -1 || gifs.length === 0) {
    return <></>
  }

  const src = gifs[currentIndex].media_formats.tinymp4.url
  const width = gifs[currentIndex].media_formats.tinymp4.dims[0]
  const height = gifs[currentIndex].media_formats.tinymp4.dims[1]
  
  return (
    <Video src={src} width={width} height={height} loop autoPlay muted/>
  )
}
