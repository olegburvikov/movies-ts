import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Tag from '../../components/UI/Tag/Tag'
import RandomMovieButton from '../../components/RandomMovieButton/RandomMovieButton'
import { Loader } from '../../components/UI/Loader/Loader'

import { timePrettier } from '../../helpers/time.helper'
import { RootState } from '../../redux/reducers/root.reducer'
import { checkIsFavourite, getMovieById } from '../../api/get'
import { postFavoriteMovie } from '../../api/post'
import { deleteFavouriteRequest } from '../../api/delete'
import styles from './styles.module.scss'
import { IMovie } from '../../types'
import ImdbRating from '../../components/UI/ImdbRating/ImdbRating'
import HeartButton from '../../components/UI/HeartButton/HeartButton'
import { toast } from 'react-toastify'

interface IParams {
  id: string
}

type MovieType = IMovie | null

const notImage =
  'https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png'

export const Movie = () => {
  const isAuth = useSelector((state: RootState) => state.user.is_auth)

  const params: IParams = useParams()

  const [movie, setMovie] = React.useState<MovieType>(null)
  const [loading, setLoading] = React.useState(true)
  const [isFavorite, setIsFavorite] = React.useState(false)

  const handleFavoriteClick = () => {
    if (movie) {
      if (isFavorite) {
        deleteFavouriteRequest(movie.imdbID).then((data) => {
          if (data.ok) {
            toast(`👍 ${movie.title} removed from favourite!`)
            setIsFavorite(false)
          }
        })
      } else {
        postFavoriteMovie(movie).then((data) => {
          if (data.ok) {
            toast(`👍 ${movie.title} added to favourite!`)
            setIsFavorite(true)
          }
        })
      }
    }
  }

  React.useEffect(() => {
    setLoading(true)

    getMovieById(params.id).then((data) => {
      setMovie(data)
      setLoading(false)
    })
    if (isAuth) {
      checkIsFavourite(params.id).then(({ status }) => {
        setIsFavorite(status)
      })
    }
  }, [isAuth, params.id])

  return !loading && movie ? (
    <div className={styles.movie}>
      <div className={styles.left}>
        <img
          className={styles.poster}
          src={movie.poster !== 'N/A' && movie.poster ? movie.poster : notImage}
          alt="movie poster"
        />
        <div className={styles.random}>
          <RandomMovieButton> Another random movie </RandomMovieButton>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.tags}>
          <Tag>{movie.released}</Tag>
          <Tag>{movie.genre}</Tag>
          <Tag>{timePrettier(movie.runtime)}</Tag>
          <Tag>{movie.country}</Tag>
        </div>

        <div className={styles.rating_wrapper}>
          <ImdbRating value={movie.imdbRating} />

          {isAuth && (
            <HeartButton isActive={isFavorite} onClick={handleFavoriteClick} />
          )}
        </div>

        <div className={styles.overview}>
          <div>
            <b>Overview</b>
          </div>
          <div className={styles.plot}>{movie.plot}</div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.loaderWrapper}>
      <Loader />
    </div>
  )
}
