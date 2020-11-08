import CONST from "../const";
import { Dispatch } from 'redux';
import {getMovies} from "../../api/get";

export const fetchMoviesList = (text: string) => (dispatch: Dispatch) => {
  getMovies(text).then((data): void => {
    dispatch(updateMoviesList(data))
  })
}

const updateMoviesList = (payload: string) => ({
  type: CONST.FETCH_MOVIES_LIST,
  payload,
})