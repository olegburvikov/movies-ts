const monthsList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function timePrettier(string: string): string {
  const time: number = parseInt(string.split(' ')[0])

  const hours: number = Math.floor(time / 60)
  const minutes: number = time - hours * 60

  return hours < 1 ? `${minutes}m` : `${hours}h ${minutes}m`
}

export function formatISO(string: string): string {
  console.log(string)
  const result = new Date(string).toISOString().substring(0, 10)
  console.log(result)
  return result
}

export function isoDatePrettier(date: string): string {
  const mouth = monthsList[new Date(date).getMonth()]
  const year = new Date(date).getFullYear()
  const day = new Date(date).getDate()
  return `${day} ${mouth} ${year}`
}
