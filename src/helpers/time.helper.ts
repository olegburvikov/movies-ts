export function timePrettier(string: string): string {
  const time: number = parseInt(string.split(' ')[0])

  const hours: number = Math.floor(time / 60)
  const minutes: number = time - hours * 60

  return hours < 1 ? `${minutes}m` : `${hours}h ${minutes}m`
}
