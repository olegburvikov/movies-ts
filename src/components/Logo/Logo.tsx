import React from 'react'
import { Link } from 'react-router-dom'
import logoSvg from '../../assets/img/logo.svg'

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logoSvg} alt="company logo" />
      </Link>
    </div>
  )
}
