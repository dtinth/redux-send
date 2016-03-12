
import React from 'react'
import Counter from '../counter/Counter'

const Counters = ({ state, dispatch }) => <ul>
  {state.map((counterState, index) => <li key={index}>
    <Counter state={counterState} dispatch={message =>
      dispatch(counters => counters.sendTo(index, message))
    } />
    <input type='button' value='x' onClick={() => {
      dispatch(counters => counters.remove(index))
    }} />
  </li>)}
  <li>
    <input type='button' value='Moar counters!' onClick={() => {
      dispatch(counters => counters.add())
    }} />
  </li>
</ul>

export default Counters
