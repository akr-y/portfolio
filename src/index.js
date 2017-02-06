import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import 'babel-polyfill'
import rootReducer from 'reducers'
import Routes from 'routes'
// import apiMiddleware from 'reducers/middleware/apiMiddleware'
import cmsMiddleware from 'reducers/middleware/cmsMiddleware'
import 'assets/style/app.scss'

// Creating store
let store = null
const middleware = [thunk, cmsMiddleware]

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__())
  : applyMiddleware(...middleware)
store = createStore(
  rootReducer,
  enhancer
)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
