import React from 'react'
import styles from './RandomMovieButton.module.scss'
import { Link } from 'react-router-dom'
import { getRandomMovie } from '../../helpers/topMovies'

const RandomMovieButton: React.FC = ({ children }) => {
  const randomImdbID = getRandomMovie()

  return (
    <Link className={styles.button} to={`/movie/${randomImdbID}`}>
      {children}
    </Link>
  )
}

export default RandomMovieButton
