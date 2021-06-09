import { monthsList } from '../../constans/time.constatns'

export function timePrettier(string: string): string {
  const time: number = parseInt(string.split(' ')[0])

  const hours: number = Math.floor(time / 60)
  const minutes: number = time - hours * 60

  if (hours < 1) {
    return `${minutes}m`
  } else {
    const minutesString = minutes ? ` ${minutes}m` : ''
    return `${hours}h${minutesString}`
  }
}

export function formatISO(string: string): string {
  return new Date(string).toISOString().substring(0, 10)
}

export function isoDatePrettier(date: string): string {
  const mouth = monthsList[new Date(date).getMonth()]
  const year = new Date(date).getFullYear()
  const day = new Date(date).getDate()
  return `${day} ${mouth} ${year}`
}
