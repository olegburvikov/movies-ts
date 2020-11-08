import React from 'react'
import styles from './styles.module.scss';

const Tag: React.FC = ({children}) => {
  return (
    <div className={styles.tag}>{children}</div>
  )
}
export default Tag;