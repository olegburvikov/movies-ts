import { FAVOURITE } from '../const'
import { IMovie } from '../../types'

const initialState = {
  list: [],
}
export default function favouriteReducer(state = initialState, action: any) {
  switch (action.type) {
    case FAVOURITE.DELETE:
      return {
        ...state,
        list: state.list.filter(
          (item: IMovie) => item._id !== action.payload.id
        ),
      }

    case FAVOURITE.GET:
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state
  }
}
