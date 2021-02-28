import { combineReducers } from 'redux'

import userReducer from './user.reducer'
import uiReducer from './ui.reducer'
import favouriteReducer from './favourite.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  favourite: favouriteReducer,
})

export type RootState = ReturnType<typeof rootReducer>
