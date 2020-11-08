import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Navigation() {
  return (
    <div className={styles.nav} >
        <NavLink className={styles.item} activeClassName={styles.active} to="/movies">Movies</NavLink>
        <NavLink className={styles.item} activeClassName={styles.active} to="/serials">Serials</NavLink>
    </div>
  )
}
