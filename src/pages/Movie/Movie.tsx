import React from 'react'
import {  useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { getMovieById } from '../../api/get';
import Tag from '../../components/UI/Tag/Tag';
import imdbSvg from '../../assets/img/imdb.svg';

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

export const Movie = () => {
  const params:IParams = useParams();

  const [movie, setMovie] = React.useState<IMovie>({
    title: '',
    genre: '',
    released: '',
    runtime: '',
    imdbRating: '',
    plot: '',
    poster: '',
    country: '',
  });

  React.useEffect(() => {
    getMovieById(params.id).then(data => {
      setMovie(data)
    })
  }, [params.id]);


  return (
    <div className={styles.movie}>
     <div className={styles.left}>
       <img className={styles.poster} src={movie.poster} alt="movie poster"/>
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
          <img src={imdbSvg} alt="imdb logo"/>
          <div className={styles.ratingValue}>
            <span className={styles.accent} > {movie.imdbRating}</span>/10
          </div>
        </div>

        <div className={styles.overview}>
          <div><b>Overview</b></div>
          <div className={styles.plot}>
            {movie.plot}
          </div>
        </div>

     </div>
    </div>
  )
}
