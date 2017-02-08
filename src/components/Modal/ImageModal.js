import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import styles from './ImageModal.scss'
import _ from 'lodash'

@connect(state => ({...state}))

export default class ImageModal extends Component {
  static propTypes = {
    params: PropTypes.object
  }


  constructor() {
    super()
    this.state = {
      isModal: null
    }
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    this.setState({isModal: true})
  }

  closeModal() {
    this.setState({isModal: false})
    this.props.router.push('/')
  }

  render() {
    let work = null
    if (this.props.app.fetchWorksSuccess) {
      work = _.find(this.props.app.fetchWorksSuccess, (work) => (this.props.params.workId === work.sys.id))
    }
    console.log(work)
    return (
      <div className={`${styles.wrapper} ${this.state.isModal ? styles.showModal : ''}`}>
        <div className={styles.ImageWrapper}>
          <div className={styles.style}>
            {work ? <img className={styles.image} src={work.fields.image.fields.file.url} role={'presentation'}/> : null}
          </div>
        </div>
        <div className={styles.filter} onClick={this.closeModal} />
      </div>
    )
  }
}
