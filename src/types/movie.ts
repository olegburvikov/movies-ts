export interface IMovie {
  title: string
  genre: string
  released: string
  runtime: string
  imdbRating: string
  imdbID: string
  plot: string
  poster: string
  country: string
  year: string
  _id?: string
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
