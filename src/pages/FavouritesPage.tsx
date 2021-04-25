import React from 'react'
import FavouritesList from '../components/FavouritesList/FavouritesList'
import Heading from '../ui/Heading/Heading'

const FavouritesPage: React.FC = () => {
  return (
    <>
      <div className="container">
        <Heading variant="h4">Favourites</Heading>
        <FavouritesList />
      </div>
    </>
  )
}
export default FavouritesPage
