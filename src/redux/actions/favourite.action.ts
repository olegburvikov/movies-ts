import { FAVOURITE } from '../const'
import { getFavourites } from '../../api/rest/favourites'
import { Dispatch } from 'react'

export const deleteFavourite = (id: string) => {
  return {
    type: FAVOURITE.DELETE,
    payload: id,
  }
}

export const updateFavouriteAction = () => (dispatch: Dispatch<any>) => {
  getFavourites().then((data) => {
    dispatch({
      type: FAVOURITE.GET,
      payload: data.results,
    })
  })
}
