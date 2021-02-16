import React from 'react'
import { getFavourites } from '../../api/get'
import MoviePreview from '../../components/MoviePreview/MoviePreview'
import { IMovie } from '../Movie/Movie'

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
            <MoviePreview key={movie.imdbID} {...movie} />
          ))
        : 'empty'}
    </div>
  )
}

export default Favourites
