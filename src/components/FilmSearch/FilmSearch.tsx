import React from 'react'
import Portal from '../Portal'
import styles from './FilmSearch.module.scss'
import Input from '../../ui/Input/Input'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { IMoviePreview } from '../../types/movie'
import MoviePreview from '../MoviePreview/MoviePreview'
import { setIsSearchOpen } from '../../redux/actions/ui.action'
import { getMovies } from '../../api/get'
import useDebounce from '../../hooks/useDebounce'
import useClickOutside from '../../hooks/useClickOutside'
import { Loader } from '../../ui/Loader/Loader'

type MoviesList = null | Array<IMoviePreview>

const FilmSearch: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = React.useState('')
  const [movies, setMovies] = React.useState<MoviesList>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  const modalRef = useClickOutside(() => dispatch(setIsSearchOpen(false)))
  const debouncedRequest = useDebounce((value: string) => {
    getMovies(value).then((data) => {
      setMovies(data)
      setLoading(false)
    })
  }, 500)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value
    setInputValue(inputValue)

    if (inputValue.trim()) {
      setLoading(true)
      debouncedRequest(inputValue)
    } else {
      setMovies(null)
    }
  }

  const handleFilmClick = (imdbID: string) => {
    history.push(`/movie/${imdbID}`)
    dispatch(setIsSearchOpen(false))
  }

  return (
    <Portal className={styles.portal}>
      <div ref={modalRef} className={styles.modal}>
        <div className={styles.input}>
          <Input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search..."
            autoFocus
          />
        </div>

        {loading ? (
          <Loader />
        ) : movies ? (
          movies.length ? (
            <div className={styles.movies}>
              {movies.map((movie) => (
                <MoviePreview
                  onClick={handleFilmClick}
                  key={movie.imdbID}
                  {...movie}
                />
              ))}
            </div>
          ) : (
            <div className={styles.zero_ui}>
              <span>
                No results for "<b>{inputValue}</b>"
              </span>
            </div>
          )
        ) : (
          <div className={styles.zero_ui}>No recent search</div>
        )}
      </div>
    </Portal>
  )
}

export default FilmSearch
