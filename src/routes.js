import React, {Component} from 'react'
import {Router, Route, hashHistory} from 'react-router'

import App from 'components/App'
import ImageModal from 'components/Modal/ImageModal'

export default class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='work/:workId' component={ImageModal} />
        </Route>
      </Router>
    )
  }
}
