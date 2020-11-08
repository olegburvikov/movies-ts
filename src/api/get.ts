
enum API_CONST {
  BASE = 'https://www.omdbapi.com/?apikey=',
  KEY = 'b72b5005',
}

export interface IDataMoviePreview {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
} 

export interface IMoviePreview {
  poster: string
  title: string
  year: string
  imdbID: string
} 

export const getRequest = async (url: string) => {
  const response = await fetch(`${API_CONST.BASE}${API_CONST.KEY}${url}`);
  return response.json();
}

export const getMovies = async (page: number) => {
  const result = await getRequest(`&s=murder&type=movie&plot=full&page=${page}`);
  return result.Search.map((movie: IDataMoviePreview): IMoviePreview => ({
    poster: movie.Poster,
    title: movie.Title,
    year: movie.Year,
    imdbID: movie.imdbID,
  }))
}

export const getMovieById = async (id: string) => {
  const result = await getRequest(`&i=${id}&type=movie&plot=full`);
  
  return {
    title: result.Title,
    genre: result.Genre,
    released: result.Released,
    runtime: result.Runtime,
    imdbRating: result.imdbRating,
    plot: result.Plot,
    poster: result.Poster,
  }
}

