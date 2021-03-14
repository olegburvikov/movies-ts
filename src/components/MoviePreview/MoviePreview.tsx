import React from 'react'
import { IMoviePreview } from '../../types/movie'
import styles from './styles.module.scss'
import noImagePng from '../../assets/images/no-image.png'

interface IMoviePreviewProps extends IMoviePreview {
  onClick: (id: string) => void
}
const MoviePreview: React.FC<IMoviePreviewProps> = ({
  poster,
  title,
  year,
  imdbID,
  onClick,
}) => {
  const handleClick = () => onClick(imdbID)

  return (
    <div className={styles.movie} onClick={handleClick}>
      <div className={styles.poster}>
        <img src={poster !== 'N/A' ? poster : noImagePng} alt="movie poster" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.tab}>{year}</div>
      </div>
    </div>
  )
}
export default MoviePreview
