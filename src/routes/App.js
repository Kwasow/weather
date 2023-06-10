import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/reducers/counterSlice'
import { Background, Button, Text } from '../components/index'
import { change } from '../redux/reducers/themeSlice'

function App() {
  const count = useSelector(state => state.counter.value)
  const isEven = useSelector(state => state.isEven.value)
  const dispatch = useDispatch()

  return (
    <Background>
      <Button
        aria-label='Increment value'
        onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <Text>{count}</Text>
      <Text>isEven: {isEven.toString()}</Text>
      <Button
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
      <Button
        aria-label='Theme switcher'
        onClick={() => {dispatch(change())}}>
        Switch theme
      </Button>
    </Background>
  )
}

export default App
