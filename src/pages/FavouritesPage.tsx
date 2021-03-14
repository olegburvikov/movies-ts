import React from 'react'
import FavouritesList from '../components/FavouritesList/FavouritesList'
import Header from '../components/Header/Header'
import Heading from '../ui/Heading/Heading'

const FavouritesPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Heading variant="h4">Favourites</Heading>
        <FavouritesList />
      </div>
    </>
  )
}
export default FavouritesPage
