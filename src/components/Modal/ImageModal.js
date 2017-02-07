import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import styles from './ImageModal.scss'

@connect(state => ({...state}))

export default class ImageModal extends Component {
  static propTypes = {
    params: PropTypes.object
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.ImageWrapper}>
          <div className={styles.style}>
            Image
          </div>
        </div>
        <div className={styles.filter} />
      </div>
    )
  }
}
