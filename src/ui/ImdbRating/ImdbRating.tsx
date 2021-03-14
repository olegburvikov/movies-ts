import React from 'react'
import styles from './ImdbRating.module.scss'
import imdbSvg from '../../assets/icons/imdb.svg'

interface IImdbRatingProps {
  value: string
}

const ImdbRating: React.FC<IImdbRatingProps> = ({ value }) => {
  return (
    <div className={styles.rating}>
      <img src={imdbSvg} alt="imdb logo" />
      <div className={styles.ratingValue}>
        <span className={styles.accent}> {value}</span>
        <span>/10</span>
      </div>
    </div>
  )
}

export default ImdbRating
