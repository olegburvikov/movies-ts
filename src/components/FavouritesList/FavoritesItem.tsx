import React from 'react'
import { IMovie } from '../../types/movie'
import styles from './FavouritesList.module.scss'
import { isoDatePrettier, timePrettier } from '../../helpers/time'
import { useHistory } from 'react-router-dom'
import TagsList from '../TagsList/TagsList'

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
  const history = useHistory()
  const tags = [
    data.genre,
    isoDatePrettier(data.released),
    timePrettier(data.runtime),
    data.country,
  ]

  function handleItemClick() {
    history.push(`/movie/${data.imdbID}`)
  }

  return (
    <div onClick={handleItemClick} className={styles.movie}>
      <div className={styles.poster}>
        <img src={data.poster} alt="movie poster" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{data.title}</div>
        <TagsList tags={tags} />

        {/*<HeartButton isActive={true} onClick={handleHeartClick} />*/}
      </div>
    </div>
  )
}

export default FavouritesItem
