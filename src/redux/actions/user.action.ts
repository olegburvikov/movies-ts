import CONST from '../const'

interface IUserLogin {
  token: string
  email: string
  name: string
  avatar: string
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
