import { API_CONST } from './consts'

export const deleteRequest = async (url: string) => {
  const token = JSON.parse(localStorage.getItem('token') || '{}')

  const response = await fetch(`${API_CONST.API_BASE}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
  })
  return response.json()
}

export const deleteFavourite = async (imdbID: string) => {
  return await deleteRequest(`/favourites/?imdbID=${imdbID}`)
}
