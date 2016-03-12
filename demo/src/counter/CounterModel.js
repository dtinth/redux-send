
const CounterModel = {
  getInitialState: () => 0,
  increment: () => state => state + 1,
  decrement: () => state => state - 1
}

export default CounterModel
