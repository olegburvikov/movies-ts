export const getQuery = (query: string): string | null => {
  // @ts-ignore
  const searchUrl = new URL(window.location).searchParams
  return searchUrl.get(query)
}
