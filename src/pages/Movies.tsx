import React from 'react'
import { IMoviePreview } from '../api/get'
import MoviePreview from '../components/MoviePreview/MoviePreview';
import {useDispatch, useSelector} from "react-redux";
import {fetchMoviesList} from "../redux/actions/movies.action";
import {RootState} from "../redux/reducers/root.reducer";

const Movies: React.FC = () => {

 const dispatch = useDispatch();
 const movies: IMoviePreview[] = useSelector((state: RootState) => state.movies.list);

 React.useEffect(() => {
   dispatch(fetchMoviesList('drive'));
 }, [dispatch])

  return (
    <>
      {movies.length ? (
        movies.map((movie) => <MoviePreview key={movie.imdbID} {...movie} />)
      ) : (
        <div>Not Found</div>
      )}
    </>
  )
}
export default Movies;


// <InfiniteScroll
//       pageStart={0}
//       loadMore={fetchMovies}
//       hasMore={true}
//       loader={<div style={{margin: '100px auto'}}><Loader /></div>}
//   > {movies.map((movie) => <MoviePreview key={movie.imdbID} {...movie} />)}
// </InfiniteScroll>