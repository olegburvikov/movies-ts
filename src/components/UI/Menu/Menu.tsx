import React, { ComponentElement } from 'react'
import styles from './Menu.module.scss'
import useClickOutside from '../../../hooks/useClickOutside'

interface IMenu {
  menuButton: ComponentElement<any, any>
}

interface IMenuItemProps {
  onClick?: () => void
}

export const Menu: React.FC<IMenu> = ({ children, menuButton }) => {
  const ref = useClickOutside(() => setIsOpen(false))

  const [isOpen, setIsOpen] = React.useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.wrapper}>
      <div onClick={toggleOpen}>{menuButton}</div>
      {isOpen && (
        <div ref={ref} className={styles.menu}>
          {children}
        </div>
      )}
    </div>
  )
}

export const MenuItem: React.FC<IMenuItemProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.item}>
      {children}
    </div>
  )
}
