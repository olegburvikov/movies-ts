import { useEffect, useRef } from 'react'

export default function useClickOutside(onOutsideClick: () => void) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      document.addEventListener('click', handleClickOutside, false)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, false)
    }
  })

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current) {
      if (!(ref.current as any).contains(e.target)) {
        onOutsideClick()
      }
    }
  }

  return ref
}
