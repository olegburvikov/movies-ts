import { API_BASES } from '../constans/api.constans'

type HttpMethodType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'

class ApiProvider {
  async createRequest(
    method: HttpMethodType,
    apiBase: API_BASES,
    url: string,
    data?: object
  ) {
    const token = JSON.parse(localStorage.getItem('token') || 'null')

    const options: RequestInit = {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
    }

    if (method !== 'GET' && method !== 'DELETE' && data) {
      options.body = JSON.stringify(data)
    }

    const response = await fetch(`${apiBase}${url}`, options)

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`)
    }

    return await response.json()
  }

  async post(url: string, data: object) {
    return await this.createRequest('POST', API_BASES.API_BASE, url, data)
  }

  async get(url: string) {
    return await this.createRequest('GET', API_BASES.API_BASE, url)
  }

  async getImdb(url: string, data: object) {
    return await this.createRequest('GET', API_BASES.OMDB_API_BASE, url, data)
  }

  async patch(url: string, data: object) {
    return await this.createRequest('PATCH', API_BASES.API_BASE, url, data)
  }

  async delete(url: string) {
    return await this.createRequest('DELETE', API_BASES.API_BASE, url)
  }
}

const apiInstance = new ApiProvider()

export default apiInstance
