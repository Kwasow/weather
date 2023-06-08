import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../utils/reducers/counterSlice'
import { Button } from '../components/Button'

function App() {
  const count = useSelector(state => state.counter.value)
  const isEven = useSelector(state => state.isEven.value)
  const dispatch = useDispatch()

  return (
    <div>
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
    </div>
  )
}

export default App
