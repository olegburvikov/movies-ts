import React from 'react'
import { IMoviePreview } from '../../types/movie'
import styles from './MoviePreview.module.scss'
import noImagePng from '../../assets/images/no-image.png'
import Tag from '../../ui/Tag/Tag'

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
        <Tag>{year}</Tag>
      </div>
    </div>
  )
}
export default MoviePreview
