import CONST from "../const";

const initialState = {
  list: [],
};
export default function moviesReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case CONST.FETCH_MOVIES_LIST:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}

