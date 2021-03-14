import React from 'react'
import styles from './HeartButton.module.scss'
import { HeartIcon } from '../icons/Icons'

interface IHearthButtonProps {
  isActive: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const HeartButton: React.FC<IHearthButtonProps> = ({ isActive, onClick }) => {
  return (
    <button className={styles.heart} onClick={onClick}>
      <HeartIcon fill={isActive ? 'red' : 'none'} />
    </button>
  )
}

export default HeartButton
