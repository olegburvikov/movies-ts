import React, { useEffect } from 'react'
import { IMovie } from '../../types'
import FavoritesItem from './FavoritesItem'
import styles from './FavouritesItem.module.scss'
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
    <>
      <h2 className={styles.page_title}>Favourites</h2>
      <div className={styles.favorites_list}>
        {data.map((movie: IMovie) => (
          <FavoritesItem key={movie._id} data={movie} />
        ))}
      </div>
    </>
  )
}

export default FavouritesList
