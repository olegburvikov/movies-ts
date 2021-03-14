import React from 'react'
import { IMovie } from '../../types/movie'
import styles from './FavouritesList.module.scss'
import Tag from '../../ui/Tag/Tag'
import { isoDatePrettier, timePrettier } from '../../helpers/time.helper'
import { Link } from 'react-router-dom'

interface IFavouritesItemProps {
  data: IMovie
}

const FavouritesItem: React.FC<IFavouritesItemProps> = ({ data }) => {
  // const dispatch = useDispatch()
  //
  // const handleHeartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.stopPropagation()
  //   dispatch(deleteFavourite(data.imdbID))
  // }

  return (
    <Link to={`/movie/${data.imdbID}`} className={styles.movie}>
      <div className={styles.poster}>
        <img src={data.poster} alt="movie poster" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{data.title}</div>

        <div className={styles.tags}>
          <Tag>{data.genre}</Tag>
          <Tag>{isoDatePrettier(data.released)}</Tag>
          <Tag>{timePrettier(data.runtime)}</Tag>
          <Tag>{data.country}</Tag>
        </div>

        {/*<HeartButton isActive={true} onClick={handleHeartClick} />*/}
      </div>
    </Link>
  )
}

export default FavouritesItem
