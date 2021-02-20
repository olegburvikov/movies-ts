import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Tag from '../../components/UI/Tag/Tag'
import RandomMovieButton from '../../components/RandomMovieButton/RandomMovieButton'
import { Loader } from '../../components/UI/Loader/Loader'
import { HeartIcon } from '../../components/UI/icons/Icons'

import { timePrettier } from '../../helpers/time.helper'
import { RootState } from '../../redux/reducers/root.reducer'
import { checkIsFavourite, getMovieById } from '../../api/get'
import { postFavoriteMovie } from '../../api/post'
import { deleteFavourite } from '../../api/delete'
import styles from './styles.module.scss'
import { IMovie } from '../../types'

import imdbSvg from '../../assets/img/imdb.svg'

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
        deleteFavourite(movie.imdbID).then((data) => {
          if (data.ok) {
            setIsFavorite(false)
          }
        })
      } else {
        postFavoriteMovie(movie).then((data) => {
          if (data.ok) {
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
    checkIsFavourite(params.id).then(({ status }) => {
      setIsFavorite(status)
    })
  }, [params.id])

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

        <div className={styles.rating}>
          <img src={imdbSvg} alt="imdb logo" />
          <div className={styles.ratingValue}>
            <span className={styles.accent}> {movie.imdbRating}</span>
            <span>/10</span>
          </div>
          {isAuth && (
            <button className={styles.heart} onClick={handleFavoriteClick}>
              <HeartIcon fill={isFavorite ? 'red' : 'none'} />
            </button>
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
