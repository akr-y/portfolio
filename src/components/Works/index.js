import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import styles from './Works.scss'
import Work from './Work'

@connect(state => ({...state}))

export default class Works extends Component {

  static propTypes = {
    app: PropTypes.object
  }

  render() {
    const works = this.props.app.fetchWorksSuccess
    return (
      <div className={styles.wrapper}>
        {works ? _.map(works, (work) => {
          const data = {
            description: work.fields.description,
            link: work.fields.link,
            workId: work.sys.id,
            role: work.fields.role,
            tech: work.fields.tech,
            term: work.fields.term,
            title: work.fields.title,
            thumbnail: work.fields.thumbnail.fields.file.url
          }
          return <Work key={work.sys.id} {...data} />
        }) : null}
      </div>
    )
  }
}
