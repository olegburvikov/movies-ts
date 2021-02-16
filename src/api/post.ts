import { IMovie } from '../pages/Movie/Movie'

export const postRequest = async (url: string, data: object) => {
  const token = JSON.parse(localStorage.getItem('token') || 'null')
  const response = await fetch(`https://filmapi0.herokuapp.com/api/${url}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })

  const json = await response.json()
  json.ok = response.ok

  return await json
}

interface IGoogleAuth {
  code: string
  redirect_uri: string
}

export const googleAuth = async (data: IGoogleAuth) => {
  return await postRequest('auth/login', data)
}

export const postFavoriteMovie = async (data: IMovie) => {
  return await postRequest('favourites', data)
}
