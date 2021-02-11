import React from 'react'
import googleLogo from '../../../assets/img/google-logo.svg'
import styles from './GoogleAuthButton.module.scss'

function GoogleAuthButton() {
  return (
    <button className={styles.button}>
      <img src={googleLogo} alt="google logo" />
      <span>Sign in with Google</span>
    </button>
  )
}

export default GoogleAuthButton
