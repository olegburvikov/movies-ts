import React from 'react'
import googleLogo from '../../../assets/img/google-logo.svg'
import styles from './GoogleAuthButton.module.scss'

interface IProps {
  onClick: () => void
}

function GoogleAuthButton({ onClick }: IProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src={googleLogo} alt="google logo" />
      <span>Sign in with Google</span>
    </button>
  )
}

export default GoogleAuthButton
