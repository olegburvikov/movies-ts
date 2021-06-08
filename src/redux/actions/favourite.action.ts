import { FAVOURITE } from '../const'
import { getFavourites } from '../../api/rest/favourites'

export const deleteFavourite = (id: string) => {
  return {
    type: FAVOURITE.DELETE,
    payload: id,
  }
}

export const updateFavouriteAction = () => (dispatch: any) => {
  getFavourites().then((data) => {
    if (data.ok) {
      dispatch({
        type: FAVOURITE.GET,
        payload: data.results,
      })
    }
  })
}
