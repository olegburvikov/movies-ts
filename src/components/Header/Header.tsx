import React from 'react'
import { RootState } from '../../redux/reducers/root.reducer'
import Logo from '../Logo/Logo'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import GoogleAuthButton from '../../ui/GoogleAuthButton/GoogleAuthButton'
import { userLogout } from '../../redux/actions/user.action'
import Avatar from '../../ui/Avatar/Avatar'
import { Menu } from '../../ui/Menu/Menu'
import { MenuItem } from '../../ui/Menu/MenuItem'
import { setIsSearchOpen } from '../../redux/actions/ui.action'
import FilmSearch from '../FilmSearch/FilmSearch'
import { Search } from '../../ui/icons/Icons'
import { toast } from 'react-toastify'
import cn from 'classnames'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

export default function Header() {
  const dispatch = useDispatch()
  const { is_auth, avatar } = useSelector((state: RootState) => state.user)

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
    <div className={styles.header}>
      {isSearchOpen && <FilmSearch />}

      <div className={cn(styles.header_wrapper, 'container')}>
        <div className={styles.left_side}>
          <Logo />
          <div className={styles.switcher}>
            <ThemeSwitcher />
          </div>
        </div>
        <div className={styles.right_side}>
          <button
            style={{ marginRight: 20 }}
            className={styles.search}
            onClick={handleSearchClick}
          >
            <Search size={20} />
          </button>
          {is_auth ? (
            <>
              <Menu menuButton={<Avatar src={avatar} />}>
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
    </div>
  )
}
