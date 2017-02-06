import React, {Component} from 'react'
import {connect} from 'react-redux'
import styles from './Header.scss'

@connect(state => ({...state}))

export default class Header extends Component {

  render() {
    return (
      <div>
        <header className={styles.header}>
          <div className={styles.wrapper}>
            Akira Yamamoto
          </div>
        </header>
      </div>
    )
  }
}
