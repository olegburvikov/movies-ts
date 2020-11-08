import React from 'react'
import { getMovies, IMoviePreview } from '../api/get'
import MoviePreview from '../components/MoviePreview/MoviePreview';
import InfiniteScroll from 'react-infinite-scroller';
import { Loader } from '../components/UI/Loader/Loader';

const Movies: React.FC = () => {
  const [movies, setMovies] = React.useState<IMoviePreview[]>([]);

  const fetchMovies = (page: number) => {
    getMovies(page).then((data): any => {
      setMovies([...movies, ...data])
    })
  }

  return (
    <InfiniteScroll
          pageStart={0}
          loadMore={fetchMovies}
          hasMore={true || false}
          loader={<div style={{margin: '100px auto'}}><Loader /></div>}
      > {movies.map((movie) => <MoviePreview key={movie.imdbID} {...movie} />)}
    </InfiniteScroll>
  )
}
export default Movies;
