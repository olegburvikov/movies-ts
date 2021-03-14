import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import { MainPage, AuthVerifyPage, FavouritesPage } from './'
import MoviePage from './MoviePage'

const Root: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/movie/:id" component={MoviePage} />
      <PrivateRoute exact path="/favourites" component={FavouritesPage} />
      <Route exact path="/auth-verify" component={AuthVerifyPage} />
    </Switch>
  )
}

export default Root
