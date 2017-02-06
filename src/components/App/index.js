import React, {Component, PropTypes} from 'react'
import {fetchWorks} from 'reducers/app'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Works from 'components/Works'

@connect(state => ({...state}),
dispatch => bindActionCreators({fetchWorks}, dispatch))

export default class App extends Component {
  static propTypes = {
    fetchWorks: PropTypes.func
  }

  componentWillMount() {
    this.props.fetchWorks()
  }

  render() {
    return (
      <div>
        <Header />
        <Works />
        <Footer />
      </div>
    )
  }
}
