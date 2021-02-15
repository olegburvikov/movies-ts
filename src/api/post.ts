export const postRequest = async (data: object) => {
  const response = await fetch(
    `https://filmapi0.herokuapp.com/api/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    }
  )

  const json = await response.json()
  json.ok = response.ok

  return await json
}
