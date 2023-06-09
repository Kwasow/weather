import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/reducers/counterSlice'
import { Background, Button } from '../components/index'

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
      <p>{count}</p>
      <p>isEven: {isEven.toString()}</p>
      <Button
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
    </Background>
  )
}

export default App
