import React from 'react'
import { Movie } from '../components/Movie/Movie'
import Header from '../components/Header/Header'

export default function MoviePage() {
  return (
    <>
      <Header />
      <div className="container">
        <Movie />
      </div>
    </>
  )
}
