import React, {Component} from 'react'
import styles from './Loading.scss'

export default class Loading extends Component {

  render() {
    return (

      <div className={styles.fadingcircle}>
        <div className={`${styles.circle1} ${styles.circle}`}></div>
        <div className={`${styles.circle2} ${styles.circle}`}></div>
        <div className={`${styles.circle3} ${styles.circle}`}></div>
        <div className={`${styles.circle4} ${styles.circle}`}></div>
        <div className={`${styles.circle5} ${styles.circle}`}></div>
        <div className={`${styles.circle6} ${styles.circle}`}></div>
        <div className={`${styles.circle7} ${styles.circle}`}></div>
        <div className={`${styles.circle8} ${styles.circle}`}></div>
        <div className={`${styles.circle9} ${styles.circle}`}></div>
        <div className={`${styles.circle10} ${styles.circle}`}></div>
        <div className={`${styles.circle11} ${styles.circle}`}></div>
        <div className={`${styles.circle12} ${styles.circle}`}></div>
      </div>

    )
  }
}
