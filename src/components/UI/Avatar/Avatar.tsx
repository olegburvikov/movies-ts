import React from 'react'
import styles from './Avatar.module.scss'
interface IAvatarProps {
  src: string
}

function Avatar({ src }: IAvatarProps) {
  return <img className={styles.photo} src={src} alt="avatar" />
}

export default Avatar
