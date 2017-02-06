import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import styles from './Work.scss'

@connect(state => ({...state}))

export default class Work extends Component {
  static propTypes = {
    description: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    role: PropTypes.string,
    tech: PropTypes.string,
    term: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string
  }
  render() {

    return (
      <div className={styles.wrapper}>
        <div className={styles.workWrapper}>
          <div className={styles.thumbnailWrapper}>
            <img className={styles.thumbnail} src={this.props.thumbnail} />
          </div>
          <div className={styles.descriptionWrapper}>
            <div className={styles.title}>{this.props.title}</div>
            <div className={styles.description}>{this.props.description}</div>
            <div className={styles.term}>{this.props.term}</div>
            <div className={styles.role}>{this.props.role}</div>
            <div className={styles.tech}>{this.props.tech}</div>
          </div>
        </div>
        <div className={styles.boardWrapper}>
          <div className={styles.board} />
        </div>
      </div>
    )
  }
}
