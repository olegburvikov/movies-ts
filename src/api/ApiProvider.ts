export default class ApiProvider {
  constructor(
    readonly apiBase: string,
    readonly initHeaders: HeadersInit,
    readonly getTokenCallback?: () => string | null
  ) {}

  async createRequest(
    method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
    apiBase: string,
    url: string,
    data?: object
  ) {
    const headers = { ...this.initHeaders } as { [key: string]: string }
    // if getTokenCallback exists add Authorization in request headers
    if (this.getTokenCallback) {
      headers.Authorization = `Bearer ${this.getTokenCallback()}`
    }

    const options: RequestInit = { method, headers }

    // if request method isn't GET or DELETE add body to request
    if (method !== 'GET' && method !== 'DELETE') {
      options.body = JSON.stringify(data || {})
    }

    const response = await fetch(`${apiBase}${url}`, options)

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`)
    }

    return await response.json()
  }

  async get(url: string) {
    return await this.createRequest('GET', this.apiBase, url)
  }

  async post(url: string, data: object) {
    return await this.createRequest('POST', this.apiBase, url, data)
  }

  async put(url: string, data: object) {
    return await this.createRequest('PUT', this.apiBase, url, data)
  }

  async patch(url: string, data: object) {
    return await this.createRequest('PATCH', this.apiBase, url, data)
  }

  async delete(url: string) {
    return await this.createRequest('DELETE', this.apiBase, url)
  }
}
