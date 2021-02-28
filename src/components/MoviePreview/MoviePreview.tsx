import React from 'react'
import { IMoviePreview } from '../../api/types'
import styles from './styles.module.scss'

const imgNoFind =
  'https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png'

interface IMoviePreviewProps extends IMoviePreview {
  onClick: (id: string) => void
}
// TODO add memo
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
