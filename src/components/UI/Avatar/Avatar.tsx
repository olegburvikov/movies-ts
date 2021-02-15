import React from 'react'
import styles from './Avatar.module.scss'
import anonymousSvg from '../../../assets/icons/anonimus.svg'

interface IAvatarProps {
  src: string
}

function Avatar({ src }: IAvatarProps) {
  return <img className={styles.photo} src={src || anonymousSvg} alt="avatar" />
}

export default Avatar
