import React, {Component} from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from 'components/App'

export default class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/'>
          <IndexRoute component={App} />
        </Route>
      </Router>
    )
  }
}
