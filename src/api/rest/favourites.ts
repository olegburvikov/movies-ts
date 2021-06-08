import { api } from '../index'
import { IMovie } from '../../types/movie'
import { formatISO } from '../../helpers/time'

export const deleteFavourite = async (imdbID: string) => {
  return await api.delete(`favourites/?imdbID=${imdbID}/`)
}

export const checkIsFavourite = async (imdbId: string) => {
  return await api.get(`favourites/is-movie-favourite/?imdbID=${imdbId}/`)
}

export const getFavourites = async () => {
  return await api.get(`favourites/`)
}

export const postFavoriteMovie = async (data: IMovie) => {
  return await api.post('favourites/', {
    ...data,
    released: formatISO(data.released),
  })
}
