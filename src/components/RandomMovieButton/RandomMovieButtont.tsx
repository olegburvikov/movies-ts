import React from 'react'
import styles from './RandomMovieButton.module.scss'
import { Link } from 'react-router-dom'

const RandomMovieButton: React.FC = ({ children }) => {
  const randomImdbID = Math.floor(Math.random() * 100000)

  return (
    <Link className={styles.button} to={`/movie/tt01${randomImdbID}`}>
      {children}
    </Link>
  )
}

export default RandomMovieButton
