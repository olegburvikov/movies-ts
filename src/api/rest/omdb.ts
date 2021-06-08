import { IDataMoviePreview, IMoviePreview } from '../../types/movie'
import { apiOmdb } from '../index'

export const getMovies = async (text: string) => {
  const result = await apiOmdb.get(`&s=${text}&type=movie&plot=full&page=${1}`)
  if (result.Response === 'False') return []
  return result.Search.map(
    (movie: IDataMoviePreview): IMoviePreview => ({
      poster: movie.Poster,
      title: movie.Title,
      year: movie.Year,
      imdbID: movie.imdbID,
    })
  )
}

export const getMovieById = async (id: string) => {
  const result = await apiOmdb.get(`&i=${id}&type=movie&plot=full`)
  return {
    imdbID: result.imdbID,
    title: result.Title,
    genre: result.Genre,
    released: result.Released,
    runtime: result.Runtime,
    imdbRating: result.imdbRating,
    plot: result.Plot,
    poster: result.Poster,
    country: result.Country,
    year: result.Year,
  }
}
