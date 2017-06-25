import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import Loading from 'components/Loading'
import styles from './ImageModal.scss'

@connect(state => ({...state}))

export default class ImageModal extends Component {
  static propTypes = {
    params: PropTypes.object,
    router: PropTypes.object,
    app: PropTypes.object
  }


  constructor() {
    super()
    this.state = {
      isModal: null,
      isImageLoaded: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.imageLoaded = this.imageLoaded.bind(this)
  }

  componentDidMount() {
    this.setState({isModal: true})
  }

  closeModal() {
    this.setState({isModal: false})
    this.props.router.push('/')
  }

  imageLoaded() {
    this.setState({isImageLoaded: true})
  }

  render() {
    let work = null
    if (this.props.app.fetchWorksSuccess) {
      work = _.find(this.props.app.fetchWorksSuccess, (w) => (this.props.params.workId === w.sys.id))
    }
    console.log(this.state.isImageLoaded)
    return (
      <div className={`${styles.wrapper} ${this.state.isModal ? styles.showModal : ''}`}>
        <div className={styles.ImageWrapper}>
          <div className={styles.overflow}>
            {work
              ? <img
                className={`${this.state.isImageLoaded ? styles.show : ''} ${styles.image}`}
                src={work.fields.image.fields.file.url}
                role={'presentation'}
                onLoad={this.imageLoaded}
              />
              : null
            }
            {this.state.isImageLoaded ? null : <Loading />}
          </div>
        </div>
        <div className={styles.filter} onClick={this.closeModal} />
      </div>
    )
  }
}
