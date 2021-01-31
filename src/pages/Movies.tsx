import React from 'react'
import { IMoviePreview } from '../api/get'
import MoviePreview from '../components/MoviePreview/MoviePreview'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers/root.reducer'
import Preview from '../components/Preview/Preview'

type MoviesList = null | IMoviePreview[]

const Movies: React.FC = () => {
  const movies: MoviesList = useSelector(
    (state: RootState) => state.movies.list
  )

  return (
    <>
      {movies === null ? (
        <Preview />
      ) : movies.length ? (
        movies.map((movie) => <MoviePreview key={movie.imdbID} {...movie} />)
      ) : (
        <div className="not-found">
          <span>Not Found</span>
        </div>
      )}
    </>
  )
}
export default Movies
