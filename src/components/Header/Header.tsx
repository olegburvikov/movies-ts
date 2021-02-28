import React from 'react'
import Logo from '../Logo/Logo'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import GoogleAuthButton from '../UI/GoogleAuthButton/GoogleAuthButton'
import { userLogout } from '../../redux/actions/user.action'
import { RootState } from '../../redux/reducers/root.reducer'
import Avatar from '../UI/Avatar/Avatar'
import { Menu, MenuItem } from '../UI/Menu/Menu'
import { setIsSearchOpen } from '../../redux/actions/ui.action'
import FilmSearch from '../FilmSearch/FilmSearch'
import { Search } from '../UI/icons/Icons'
import { toast } from 'react-toastify'

export default function Header() {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  const isSearchOpen: boolean = useSelector(
    (state: RootState) => state.ui.is_search_open
  )

  const handleLogout = (): void => {
    toast(`😰 You are successfully log out!`)
    dispatch(userLogout())
  }

  const handleSearchClick = (): void => {
    dispatch(setIsSearchOpen(true))
  }

  return (
    <div className="header">
      {isSearchOpen && <FilmSearch />}

      <Logo />
      <div className={styles.right_side}>
        <button
          style={{ marginRight: 20 }}
          className={styles.search}
          onClick={handleSearchClick}
        >
          <Search size={20} />
        </button>
        {user.is_auth ? (
          <>
            <Menu menuButton={<Avatar src={user.avatar} />}>
              <Link to="/favourites">
                <MenuItem>Favourites</MenuItem>
              </Link>
              <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </Menu>
          </>
        ) : (
          <GoogleAuthButton />
        )}
      </div>
    </div>
  )
}
