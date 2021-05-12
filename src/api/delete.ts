import { API_CONST } from '../constans/api.constans'
import { getToken } from '../helpers/api'

export const deleteRequest = async (url: string) => {
  const token = getToken()

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
