import { API_CONST } from './consts'

export const deleteRequest = async (url: string) => {
  const token = JSON.parse(localStorage.getItem('token') || 'null')

  const response = await fetch(`${API_CONST.API_BASE}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
  })

  const json = await response.json()
  json.ok = response.ok

  return json
}

export const deleteFavouriteRequest = async (imdbID: string) => {
  return await deleteRequest(`/favourites/?imdbID=${imdbID}`)
}
