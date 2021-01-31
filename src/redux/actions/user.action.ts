import CONST from '../const'

interface IUserLogin {
  token: string
  name: string
  id: string
  photo: string
  email: string
}

export const userLogin = (payload: IUserLogin) => {
  return {
    type: CONST.USER_LOGIN,
    payload,
  }
}

export const userLogout = () => {
  return {
    type: CONST.USER_LOGOUT,
  }
}
