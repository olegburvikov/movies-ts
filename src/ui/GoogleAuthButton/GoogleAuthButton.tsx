import React from 'react'
import googleLogo from '../../assets/icons/google-logo.svg'
import styles from './GoogleAuthButton.module.scss'

function GoogleAuthButton() {
  return (
    <a
      className={styles.button}
      href={`https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&include_granted_scopes=true&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&client_id=343834365639-fkgp9n6hbn7ilkug1gdb497jkc74hne8.apps.googleusercontent.com`}
    >
      <img src={googleLogo} alt="google logo" />
      <span>Sign in with Google</span>
    </a>
  )
}

export default GoogleAuthButton
