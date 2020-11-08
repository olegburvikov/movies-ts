import React from 'react'
import { Link } from 'react-router-dom';
import logoPng from '../../assets/img/logo.svg';
export default function Logo() {
  return (
    <div className="logo">
      <Link to="/movies"><img src={logoPng} alt="company logo"/></Link>
    </div>
  )
}
