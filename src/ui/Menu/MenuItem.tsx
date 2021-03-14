import React from 'react'
import styles from './Menu.module.scss'

interface IMenuItemProps {
  onClick?: () => void
}

export const MenuItem: React.FC<IMenuItemProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.item}>
      {children}
    </div>
  )
}
