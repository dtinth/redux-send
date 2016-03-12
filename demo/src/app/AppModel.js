
import u from 'updeep'
import CounterModel from '../counter/CounterModel'
import CountersModel from '../counters/CountersModel'

const AppModel = {
  getInitialState: () => ({
    single: CounterModel.getInitialState(),
    multiple: CountersModel.getInitialState()
  }),
  sendToCounter: (message) => u({
    single: message(CounterModel)
  }),
  sendToCounters: (message) => u({
    multiple: message(CountersModel)
  })
}

export default AppModel
