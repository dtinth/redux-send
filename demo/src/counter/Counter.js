
import React from 'react'

const Counter = ({ state, dispatch }) => <span>
  <input type='button' value='-' onClick={() => {
    dispatch(counter => counter.decrement())
  }} />
  <strong> {state} </strong>
  <input type='button' value='+' onClick={() => {
    dispatch(counter => counter.increment())
  }} />
</span>

export default Counter
