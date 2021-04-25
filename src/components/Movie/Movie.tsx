import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import RandomMovieButton from '../RandomMovieButton/RandomMovieButton'
import { Loader } from '../../ui/Loader/Loader'

import { timePrettier } from '../../helpers/time.helper'
import { RootState } from '../../redux/reducers/root.reducer'
import { checkIsFavourite, getMovieById } from '../../api/get'
import { postFavoriteMovie } from '../../api/post'
import { deleteFavouriteRequest } from '../../api/delete'
import styles from './styles.module.scss'
import { IMovie } from '../../types/movie'
import ImdbRating from '../../ui/ImdbRating/ImdbRating'
import HeartButton from '../../ui/HeartButton/HeartButton'
import { toast } from 'react-toastify'
import Heading from '../../ui/Heading/Heading'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import TagsList from '../TagsList/TagsList'

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

  if (!movie) return null
  return (
    <SwitchTransition>
      <CSSTransition
        mode="out-in"
        key={!loading ? 'movie' : 'preloader'}
        classNames="fade"
        addEndListener={(node, done) =>
          node.addEventListener('transitionend', done, false)
        }
      >
        {!loading ? (
          <div className="container">
            <div className={styles.movie}>
              <div className={styles.left}>
                <img
                  className={styles.poster}
                  src={movie.poster !== 'N/A' ? movie.poster : notImage}
                  alt="movie poster"
                />
                <div className={styles.random}>
                  <RandomMovieButton> Another random movie </RandomMovieButton>
                </div>
              </div>
              <div className={styles.right}>
                <Heading variant="h2" fontFamily="accent">
                  {movie.title}
                </Heading>
                <TagsList
                  tags={[
                    movie.released,
                    movie.genre,
                    timePrettier(movie.runtime),
                    movie.country,
                  ]}
                />

                <div className={styles.rating_wrapper}>
                  <ImdbRating value={movie.imdbRating} />

                  {isAuth && (
                    <HeartButton
                      isActive={isFavorite}
                      onClick={handleFavoriteClick}
                    />
                  )}
                </div>

                <div className={styles.content}>
                  <Heading variant="h5">Overview</Heading>
                  <div className={styles.text}>{movie.plot}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.loaderWrapper}>
            <Loader />
          </div>
        )}
      </CSSTransition>
    </SwitchTransition>
  )
}
