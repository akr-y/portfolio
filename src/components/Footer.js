import React, {Component} from 'react'
import {connect} from 'react-redux'
import styles from './Footer.scss'

@connect(state => ({...state}))

export default class Footer extends Component {

  render() {
    return (
      <div>

        <footer className={styles.footer}>
          ©2017 Akira Yamamoto
        </footer>
      </div>
    )
  }
}
