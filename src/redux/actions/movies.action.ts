import CONST from '../const'
import { Dispatch } from 'redux'
import { getMovies } from '../../api/get'

export const fetchMoviesList = (text: string) => (dispatch: Dispatch) => {
  if (text.length > 2) {
    getMovies(text).then((data): void => {
      dispatch(updateMoviesList(data))
    })
  } else {
    dispatch(updateMoviesList(null))
  }
}

const updateMoviesList = (payload: string | null) => ({
  type: CONST.FETCH_MOVIES_LIST,
  payload,
})
