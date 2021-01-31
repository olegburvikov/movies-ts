import { combineReducers } from 'redux'

import moviesReducer from './movies.reducer'
import userReducer from './user.reducer'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
