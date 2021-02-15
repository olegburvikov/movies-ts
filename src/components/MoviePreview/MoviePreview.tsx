import React from 'react'
import { IMoviePreview } from '../../api/types'
import styles from './styles.module.scss'
import { useHistory } from 'react-router-dom'

const imgNoFind =
  'https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png'

const MoviePreview = ({ poster, title, year, imdbID }: IMoviePreview) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/movie/${imdbID}`)
  }

  return (
    <div className={styles.movie} onClick={handleClick}>
      <div className={styles.poster}>
        <img src={poster !== 'N/A' ? poster : imgNoFind} alt="movie poster" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.tab}>{year}</div>
      </div>
    </div>
  )
}
export default MoviePreview
