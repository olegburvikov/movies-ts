export function timePrettier(string: string): string {
  const time = parseInt(string.split(' ')[0])

  const hours = Math.floor(time / 60)
  const minutes = time - hours * 60

  return hours < 1 ? `${minutes}m` : `${hours}h ${minutes}m`
}
