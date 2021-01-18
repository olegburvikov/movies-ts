import React from 'react'
import Logo from '../Logo/Logo'
import Input from '../UI/Input/Input'
import { useDispatch } from 'react-redux'
import { fetchMoviesList } from '../../redux/actions/movies.action'
import styles from './Header.module.scss'
import { useHistory } from 'react-router-dom'

export default function Header() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [inputValue, setInputValue] = React.useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value

    setInputValue(inputValue)
    if (inputValue.length > 2) {
      history.push('/')
    }
    dispatch(fetchMoviesList(inputValue))
  }

  return (
    <div className="header">
      <Logo />
      <div className={styles.inputWrapper}>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search..."
        />
      </div>
    </div>
  )
}
