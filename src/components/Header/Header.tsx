import React from 'react'
import Logo from '../Logo/Logo'
import Input from '../UI/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesList } from '../../redux/actions/movies.action'
import styles from './Header.module.scss'
import { useHistory, Link } from 'react-router-dom'
import GoogleAuthButton from '../UI/GoogleAuthButton/GoogleAuthButton'
import { userLogout } from '../../redux/actions/user.action'
import { RootState } from '../../redux/reducers/root.reducer'
import Avatar from '../UI/Avatar/Avatar'
import { Menu, MenuItem } from '../UI/Menu/Menu'

export default function Header() {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state: RootState) => state.user)
  const [inputValue, setInputValue] = React.useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value

    setInputValue(inputValue)
    if (inputValue.length > 2) {
      history.push('/')
    }
    dispatch(fetchMoviesList(inputValue))
  }

  const handleLogout = (): void => {
    dispatch(userLogout())
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
      {user.is_auth ? (
        <>
          <Menu menuButton={<Avatar src={user.photo} />}>
            <Link to="/favorites">
              <MenuItem>Favorites</MenuItem>
            </Link>
            <MenuItem onClick={handleLogout}>Log Out</MenuItem>
          </Menu>
        </>
      ) : (
        <GoogleAuthButton />
      )}
    </div>
  )
}
