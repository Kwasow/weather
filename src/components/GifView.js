import React from 'react'
import { useSelector } from 'react-redux'

export function GifView({ query }) {
  const gifs = useSelector(state => state.weatherGif.gifs)
  const currentIndex = useSelector(state => state.weatherGif.currentIndex)

  if (currentIndex === -1 || gifs.empty()) {
    return <></>
  }
  
  return (
    <p>
      {query}<br></br>
      Gif: {gifs[currentIndex]}
    </p>
  )
}
