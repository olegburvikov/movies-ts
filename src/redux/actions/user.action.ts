import CONST from '../const'
import { getMe } from '../../api/get'

interface IUserLogin {
  token: string
  email: string
  name: string
  avatar: string
}

export const setIsUserLogged = () => (dispatch: any) => {
  const token = JSON.parse(localStorage.getItem('token') || 'null')
  if (token) {
    getMe().then((data) => {
      if (data.ok) {
        dispatch(userLogin({ token, ...data }))
      } else {
        dispatch(userLogout())
      }
    })
  } else {
    dispatch(userLogout())
  }
}

export const userLogin = (payload: IUserLogin) => {
  localStorage.setItem('token', JSON.stringify(payload.token))
  return {
    type: CONST.USER_LOGIN,
    payload,
  }
}

export const userLogout = () => {
  localStorage.removeItem('token')
  return {
    type: CONST.USER_LOGOUT,
  }
}
