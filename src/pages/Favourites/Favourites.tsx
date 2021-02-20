import React from 'react'
import { getFavourites } from '../../api/get'
import FavouritesList from '../../components/FavouritesList/FavouritesList'
import { IMovie } from '../../types'

function Favourites() {
  const [favourites, setFavourites] = React.useState([])

  React.useEffect(() => {
    getFavourites().then((data) => {
      setFavourites(data)
    })
  }, [])
  return (
    <div>
      {favourites.length
        ? favourites.map((movie: IMovie) => (
            <FavouritesList
              key={movie.imdbID}
              title={movie.title}
              genre={movie.genre}
              released={movie.released}
              imdbRating={movie.imdbRating}
              imdbID={movie.imdbID}
              poster={movie.poster}
              country={movie.country}
            />
          ))
        : 'empty'}
    </div>
  )
}

export default Favourites
