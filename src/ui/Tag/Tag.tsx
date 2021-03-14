import React from 'react'
import styles from './styles.module.scss'

const Tag: React.FC = ({ children }) => {
  if (children === 'N/A' || !children) return null
  return <div className={styles.tag}>{children}</div>
}
export default Tag
