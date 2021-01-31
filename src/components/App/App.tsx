import React from 'react'
import 'normalize.css'
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom'
import Movies from '../../pages/Movies'
import { Movie } from '../../pages/Movie/Movie'
import firebase from 'firebase'
import { firebaseConfig } from '../../api/firebaseService'
import Favorites from '../../pages/Favorites/Favorites'
import PrivateRoute from '../PrivateRoute'

firebase.initializeApp(firebaseConfig)

const App: React.FC = () => {
  // React.useEffect(() => {
  //   const db = firebase.database()
  //   console.log(db)
  // })

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
