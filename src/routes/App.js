import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from '../utils/reducers/counterSlice'

function App() {
  const count = useSelector(state => state.counter.value)
  const isEven = useSelector(state => state.isEven.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <button
        aria-label='Increment value'
        onClick={() => dispatch(increment())}>
        Increment
      </button>
      <p>{count}</p>
      <p>isEven: {isEven.toString()}</p>
      <button
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  )
}

export default App
