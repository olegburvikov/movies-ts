import React from 'react'

interface IFavouritesListProps {
  title: string
  genre: string
  released: string
  imdbRating: string
  imdbID: string
  poster: string
  country: string
}

function FavouritesList({
  title,
  genre,
  released,
  imdbRating,
  imdbID,
  poster,
  country,
}: IFavouritesListProps) {
  return (
    <div style={{ marginBottom: 30 }}>
      {[title, genre, released, imdbRating, imdbID, poster, country].map(
        (item, index) => (
          <div key={index}>{item}</div>
        )
      )}
    </div>
  )
}

export default FavouritesList
