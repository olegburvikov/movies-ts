import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles.module.scss'
import { getMovieById } from '../../api/get'
import Tag from '../../components/UI/Tag/Tag'
import imdbSvg from '../../assets/img/imdb.svg'
import { Loader } from '../../components/UI/Loader/Loader'
import RandomMovieButton from '../../components/RandomMovieButton/RandomMovieButtont'

interface IParams {
  id: string
}

export interface IMovie {
  title: string
  genre: string
  released: string
  runtime: string
  imdbRating: string
  plot: string
  poster: string
  country: string
}

type MovieType = IMovie | null

export const Movie = () => {
  const params: IParams = useParams()

  const [movie, setMovie] = React.useState<MovieType>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setLoading(true)
    getMovieById(params.id).then((data) => {
      setMovie(data)
      setLoading(false)
    })
  }, [params.id])

  const notImage =
    'https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png'

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
          <Tag>{movie.runtime}</Tag>
          <Tag>{movie.country}</Tag>
        </div>

        <div className={styles.rating}>
          <img src={imdbSvg} alt="imdb logo" />
          <div className={styles.ratingValue}>
            <span className={styles.accent}> {movie.imdbRating}</span>
            <span>/10</span>
          </div>
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
