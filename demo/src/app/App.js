
import React from 'react'
import Counter from '../counter/Counter'
import Counters from '../counters/Counters'

const App = ({ state, dispatch }) => <div>
  <h1>redux-send demo app</h1>
  <h2>Single counter</h2>
  <Counter state={state.single} dispatch={message =>
    dispatch(app => app.sendToCounter(message))
  } />
  <h2>Multiple counters</h2>
  <Counters state={state.multiple} dispatch={message =>
    dispatch(app => app.sendToCounters(message))
  } />
</div>

export default App
