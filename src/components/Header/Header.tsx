import React from 'react'
import Logo from '../Logo/Logo'
import Input from '../UI/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesList } from '../../redux/actions/movies.action'
import styles from './Header.module.scss'
import { useHistory, Link } from 'react-router-dom'
import firebase from 'firebase'
import { googleAuthProvider } from '../../api/firebaseService'
import GoogleAuthButton from '../UI/GoogleAuthButton/GoogleAuthButton'
import { userLogin, userLogout } from '../../redux/actions/user.action'
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

  const authHelper = (obj: any) => ({
    token: obj.credential.accessToken,
    name: obj.user.displayName,
    id: obj.user.uid,
    photo: obj.user.photoURL,
    email: obj.user.email,
  })

  const handleLogout = (): void => {
    dispatch(userLogout())
  }

  const handleGoogleAuth = (): void => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((result) => {
        dispatch(userLogin(authHelper(result)))
      })
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
        <GoogleAuthButton onClick={handleGoogleAuth} />
      )}
    </div>
  )
}
