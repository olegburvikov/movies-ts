import CONST from '../const'
import { getMe } from '../../api/rest/auth'
import { getToken } from '../../helpers/api'
import { Dispatch } from 'react'

interface IUserLogin {
  token: string
  email: string
  name: string
  avatar: string
}

export const setIsUserLogged = () => (dispatch: Dispatch<any>) => {
  const token = getToken()
  if (token) {
    getMe()
      .then((data) => {
        dispatch(userLogin({ token, ...data }))
      })
      .catch(() => {
        dispatch(userLogout())
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
