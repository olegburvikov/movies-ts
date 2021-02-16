import { IDataMoviePreview, IMoviePreview } from './types'
import { API_CONST } from './consts'

export const getMovieRequest = async (url: string) => {
  const response = await fetch(
    `${API_CONST.MOVIES_API}?apikey=${API_CONST.MOVIES_API_KEY}${url}`
  )
  return response.json()
}

export const getRequest = async (url: string) => {
  const token = JSON.parse(localStorage.getItem('token') || '{}')

  const response = await fetch(`${API_CONST.API_BASE}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  })
  return response.json()
}

export const getMovies = async (text: string) => {
  const result = await getMovieRequest(
    `&s=${text}&type=movie&plot=full&page=${1}`
  )
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
  const result = await getMovieRequest(`&i=${id}&type=movie&plot=full`)
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

export const getFavourites = async () => {
  return await getRequest(`/favourites`)
}

export const getMe = async () => {
  return await getRequest('/me')
}
