import CONST from '../const'

const initialState = {
  is_auth: false,
  name: null,
  email: null,
  photo: null,
  token: null,
  id: null,
}
export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case CONST.USER_LOGIN:
      return {
        ...state,
        ...action.payload,
        is_auth: true,
      }

    case CONST.USER_LOGOUT:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
