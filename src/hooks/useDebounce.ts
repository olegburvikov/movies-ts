import { useRef, useEffect } from 'react'

export default function useDebounce(func: any, delay: number, cleanUp = false) {
  const timeoutRef = useRef<any>()

  // Timer clean up
  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined
    }
  }

  useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp])

  return (...args: Array<any>) => {
    clearTimer()
    timeoutRef.current = setTimeout(() => func(...args), delay)
  }
}
