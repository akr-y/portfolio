import React, {Component} from 'react'
import {connect} from 'react-redux'
import styles from './Header.scss'
import iconGithub from 'assets/img/svg/github.svg'

@connect(state => ({...state}))

export default class Header extends Component {

  render() {
    return (
      <div>
        <header className={styles.header}>
          <a className={styles.linkGithub} target='_blank' href="https://github.com/akira3500/portfolio">
            <img src={iconGithub} />
          </a>
          <div className={styles.style}>
            AKIRA YAMAMOTO
          </div>
        </header>
      </div>
    )
  }
}
