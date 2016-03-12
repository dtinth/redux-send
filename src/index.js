
export const sendMiddleware = store => next => action => next(
  typeof action === 'function'
  ? { type: 'SEND_MESSAGE', message: action }
  : action
)

export const createReducer = Model => (state = Model.getInitialState(), action) => (
  action.type === 'SEND_MESSAGE'
  ? action.message(Model)(state)
  : state
)

export default sendMiddleware
