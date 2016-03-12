# redux-send

More docs coming soon.

__Demo App:__ https://dtinth.github.io/redux-send/


## sendMiddleware :: ReduxStoreMiddleware

A Redux middleware that wraps message functions that are dispatched to the store in `{ type: 'SEND_MESSAGE', message: message }`.


## createReducer :: Model &rarr; ReduxReducer

Creates a Redux reducer which forwards the message to the model.


## Typeclass

### Model&lt;ModelState&gt;

A Model is an Object with these keys:

- `getInitialState` :: () &rarr; ModelState
- All other keys are methods that take any arbitrary argument returns a ModelUpdater&lt;ModelState&gt;


### ModelState

A ModelState is any JavaScript object that holds the state of your application.


### ModelUpdater&lt;ModelState&gt; :: ModelState &rarr; ModelState

A ModelUpdater is a function that takes a model state and returns the next state.


## Dispatching Functions

You can dispatch a function of type (Model &rarr; ModelUpdater), then `redux-send` will update the state according to the returned updater.
