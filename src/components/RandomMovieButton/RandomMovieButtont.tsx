import React from 'react'
import styles from './RandomMovieButton.module.scss'
import { Link } from 'react-router-dom'

const RandomMovieButton: React.FC = ({ children }) => {
  const randomImdbID = `tt00${Math.floor(Math.random() * 1000000)}`

  return (
    <Link className={styles.button} to={`/movie/${randomImdbID}`}>
      {children}
    </Link>
  )
}

export default RandomMovieButton
