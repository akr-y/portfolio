import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import styles from './Work.scss'
import {Link} from 'react-router'

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
            <Link to={`/work/${this.props.workId}`}>
              <img className={styles.thumbnail} src={this.props.thumbnail} />
            </Link>
          </div>
          <div className={styles.descriptionWrapper}>
            {this.props.title ? <div className={styles.title}>{this.props.title}</div> : null}
            {this.props.description ? <div className={styles.description}>{this.props.description}</div> : null}
            {this.props.term ? <div className={styles.term}>{this.props.term}</div> :null}
            {this.props.role ? <div className={styles.role}>{this.props.role}</div> : null}
            {this.props.tech ? <div className={styles.tech}>{this.props.tech}</div> : null}
            {this.props.link ? <div className={styles.link}>
              <a href={this.props.link} target='_blank'>View site</a>
            </div> : null}
          </div>
        </div>
        <div className={styles.boardWrapper}>
          <div className={styles.board} />
        </div>
      </div>
    )
  }
}
