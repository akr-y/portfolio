import React, {Component} from 'react'
import {Route, HashRouter} from 'react-router-dom'

import App from 'components/App'
import ImageModal from 'components/Modal/ImageModal'

export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Route path='/' component={App}>
          <Route path='work/:workId' component={ImageModal} />
        </Route>
      </HashRouter>
    )
  }
}
