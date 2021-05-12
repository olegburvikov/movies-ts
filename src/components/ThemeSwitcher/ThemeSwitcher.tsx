import React, { useEffect, useState } from 'react'
import styles from './ThemeSwitcher.module.scss'
import cn from 'classnames'

const ThemeSwitcher = () => {
  const [isChecked, setIsChecked] = useState<boolean | null>(null)

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : null

    if (currentTheme) {
      document.body.setAttribute('data-theme', currentTheme)

      setIsChecked(currentTheme === 'dark')
    } else {
      setIsChecked(false)
      localStorage.setItem('theme', 'light')
    }
  }, [])

  function switchTheme() {
    setIsChecked(!isChecked)
    if (!isChecked) {
      document.body.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }

  if (isChecked === null) return null
  return (
    <div
      onClick={switchTheme}
      className={cn(styles.switcher, { [styles.active]: isChecked })}
    >
      <input
        readOnly
        className={styles.input}
        checked={isChecked}
        id="switch"
        type="checkbox"
      />
      <figure className={styles.switcher_circle} />
      <span className={styles.sun}>🌞</span>
      <span className={styles.moon}>🌜</span>

      <label htmlFor="switch" />
    </div>
  )
}

export default ThemeSwitcher
