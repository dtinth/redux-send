
import u from 'updeep'
import CounterModel from '../counter/CounterModel'

const CountersModel = {
  getInitialState: () => [
    CounterModel.getInitialState()
  ],
  add: () => state => [
    ...state, CounterModel.getInitialState()
  ],
  remove: index => u.reject((_, i) => i === index),
  sendTo: (index, message) => u({
    [index]: message(CounterModel)
  })
}

export default CountersModel
