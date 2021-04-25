import React from 'react'
import styles from './HeartButton.module.scss'
import { HeartIcon } from '../icons/Icons'
import cn from 'classnames'

interface IHearthButtonProps {
  isActive: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const HeartButton: React.FC<IHearthButtonProps> = ({ isActive, onClick }) => {
  return (
    <button
      className={cn(styles.heart, { [styles.active]: isActive })}
      onClick={onClick}
    >
      <HeartIcon />
    </button>
  )
}

export default HeartButton
