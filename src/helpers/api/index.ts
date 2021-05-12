export const getQuery = (query: string): string | null => {
  const href = window.location.href
  const searchUrl = new URL(href).searchParams
  return searchUrl.get(query)
}
