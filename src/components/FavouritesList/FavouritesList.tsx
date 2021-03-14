import React, { useEffect } from 'react'
import { IMovie } from '../../types/movie'
import FavoritesItem from './FavoritesItem'
import styles from './FavouritesList.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers/root.reducer'
import { updateFavouriteAction } from '../../redux/actions/favourite.action'

const FavouritesList: React.FC = () => {
  const dispatch = useDispatch()
  const data: Array<IMovie> = useSelector(
    (state: RootState) => state.favourite.list
  )

  useEffect(() => {
    dispatch(updateFavouriteAction())
  }, [dispatch])

  return (
    <div className={styles.favorites_list}>
      {data.map((movie: IMovie) => (
        <FavoritesItem key={movie._id} data={movie} />
      ))}
    </div>
  )
}

export default FavouritesList
