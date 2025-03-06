import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../slices/CounterSlice'
export const Counter = () => {
    const count= useSelector((state)=>state.counter.value) //state.counter represents the counter slice intial states values inside store 
    const dispatch =useDispatch()
  return (
    <div>
    <div>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  </div>
  )
}
