import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Video } from './index'
import { interval } from 'rxjs'
import { nextGif } from '../redux/reducers/weatherGifSlice'

export function GifView() {
  const dispatch = useDispatch()
  const gifs = useSelector(state => state.weatherGif.gifs)
  const currentIndex = useSelector(state => state.weatherGif.currentIndex)

  useEffect(() => {
    const timer = interval(1000 * 30)
    const gifUpdater = timer.subscribe(() => dispatch(nextGif()))

    return () => {
      gifUpdater.unsubscribe()
    }
  })

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
