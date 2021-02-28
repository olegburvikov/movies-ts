import CONST from '../const'

const initialState = {
  is_search_open: false,
}
export default function uiReducer(state = initialState, action: any) {
  switch (action.type) {
    case CONST.SET_IS_SEARCH_OPEN:
      return {
        ...state,
        is_search_open: action.payload,
      }

    default:
      return state
  }
}
