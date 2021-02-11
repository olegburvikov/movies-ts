import React from 'react'
import 'normalize.css'
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom'
import Movies from '../../pages/Movies'
import { Movie } from '../../pages/Movie/Movie'
import Favorites from '../../pages/Favorites/Favorites'
import PrivateRoute from '../PrivateRoute'
import { testRequest } from '../../api/get'

const App: React.FC = () => {
  React.useEffect(() => {
    testRequest('https://filmapi0.herokuapp.com/api/auth/login').then(
      (data) => {
        console.log(data)
      }
    )
  }, [])

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route exact path="/movie/:id" component={Movie} />
          <PrivateRoute exact path="/favorites" component={Favorites} />
        </Switch>
      </div>
    </div>
  )
}

export default App
