import React from 'react'
import styles from './styles.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={`${styles.dot} ${styles.dot1}`}/>
      <div className={`${styles.dot} ${styles.dot2}`}/>
      <div className={`${styles.dot} ${styles.dot3}`}/>
      <div className={`${styles.dot} ${styles.dot4}`}/>
    </div>
  )
}
