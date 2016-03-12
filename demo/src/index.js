
import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import sendMiddleware from '../../src'
import reducer from './reducer'
import App from './app/App'

const withDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f

const store = createStore(reducer, compose(
  applyMiddleware(sendMiddleware),
  withDevTools
))

if (module.hot) {
  module.hot.accept('./reducer', () => {
    store.replaceReducer(require('./reducer').reducer)
  })
}

function update () {
  const element = <App state={store.getState()} dispatch={store.dispatch} />
  render(element, document.querySelector('#demo'))
}

store.subscribe(update)
update()
