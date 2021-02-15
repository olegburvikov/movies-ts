import React from 'react'
import 'normalize.css'
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom'
import Movies from '../../pages/Movies'
import { Movie } from '../../pages/Movie/Movie'
import Favorites from '../../pages/Favorites/Favorites'
import PrivateRoute from '../PrivateRoute'
import AuthVerify from '../../pages/AuthVerify'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../redux/actions/user.action'
import { getMe } from '../../api/get'

const App: React.FC = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token')) || null

    if (token) {
      getMe().then((data) => {
        console.log(data)
        dispatch(
          userLogin({
            token,
            ...data,
          })
        )
      })
    }
  }, [dispatch])

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route exact path="/movie/:id" component={Movie} />
          <PrivateRoute exact path="/favorites" component={Favorites} />
          <Route exact path="/auth-verify" component={AuthVerify} />
        </Switch>
      </div>
    </div>
  )
}

export default App
