import React, {Component, PropTypes} from 'react'
import 'glamor/reset'
import {fetchFeaturedMerchants} from 'reducers/app'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Header from 'components/Header'
import Footer from 'components/Footer'

@connect(state => ({...state}),
dispatch => bindActionCreators({fetchFeaturedMerchants}, dispatch))

export default class App extends Component {
  static propTypes = {
    fetchFeaturedMerchants: PropTypes.func
  }

  componentWillMount() {
    this.props.fetchFeaturedMerchants()
  }

  render() {
    return (
      <div>
        <Header />
          test
        <Footer />
      </div>
    )
  }
}
