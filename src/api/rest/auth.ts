import { IGoogleAuth } from '../../types/api'
import { api } from '../index'

export const googleAuth = async (data: IGoogleAuth) => {
  return await api.post('auth/login/', data)
}

export const getMe = async () => {
  return await api.get('me/')
}
