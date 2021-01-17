import React from 'react'
import PreviewSvg from '../UI/icons/PreviewSvg'
import styles from './Preview.module.scss'

function Preview() {
  return (
    <div className={styles.preview}>
      <div className={styles.greet}>
        <div className={styles.title}>Hello! ✌️</div>
        <div className={styles.text}>
          Our service was created to help you quickly find out information about
          films, in order to read about a film, just enter its name in the
          search bar at the top.
        </div>
      </div>
      <PreviewSvg />
    </div>
  )
}

export default Preview
