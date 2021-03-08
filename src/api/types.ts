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

export interface IGoogleAuth {
  code: string
  redirect_uri: string
}
