import { API_BASES } from '../constans/api.constans'
import { getToken } from '../helpers/api'
import ApiProvider from './ApiProvider'

export const api = new ApiProvider(
  API_BASES.API_BASE,
  { 'Content-Type': 'application/json; charset=utf-8' },
  getToken
)
export const apiOmdb = new ApiProvider(API_BASES.OMDB_API_BASE, {})
