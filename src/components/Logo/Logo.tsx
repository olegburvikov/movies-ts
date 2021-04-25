import React from 'react'
import { Link } from 'react-router-dom'
import { Triangle } from '../../ui/icons/Icons'
import styles from './Logo.module.scss'

export default function Logo() {
  const color = 'var(--color-accent)'
  const logoText = 'Fmovie'
  return (
    <Link to="/">
      <span className={styles.logo}>
        <span className={styles.logo_text}>{logoText}</span>
        <Triangle fill={color} stroke={color} />
      </span>
    </Link>
  )
}
