import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducer from './scripts/reducer'
import Routes from './scripts/routes'


const middleware = applyMiddleware(thunk, logger)
const store = createStore(reducer, middleware)

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
