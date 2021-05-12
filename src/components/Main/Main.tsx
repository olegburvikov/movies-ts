import React from 'react'
import PreviewSvg from '../../ui/icons/PreviewSvg'
import styles from './Main.module.scss'
import RandomMovieButton from '../RandomMovieButton/RandomMovieButton'
import Heading from '../../ui/Heading/Heading'

const Main: React.FC = () => {
  const title = 'Hello!'
  const description =
    'Our service was created to help you quickly find out information about\n' +
    'films, in order to read about a film, just enter its name in the\n' +
    'search bar at the top.'

  return (
    <div className={styles.preview}>
      <div className={styles.greet}>
        <Heading variant="h1">
          <span>{title}</span>
          <span className={styles.emoji}>👋</span>
        </Heading>
        <div className={styles.text}>{description}</div>
        <div className={styles.button_wrapper}>
          <RandomMovieButton> Random movie </RandomMovieButton>
        </div>
      </div>
      <div className={styles.poster}>
        <PreviewSvg />
      </div>
    </div>
  )
}

export default Main
