import React from 'react'
import 'normalize.css'
import Header from '../Header/Header'
import Movies from '../../pages/Movies'
import Favourites from '../../pages/Favourites/Favourites'
import PrivateRoute from '../PrivateRoute'
import AuthVerify from '../../pages/AuthVerify'
import { Route, Switch } from 'react-router-dom'
import { Movie } from '../../pages/Movie/Movie'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../redux/actions/user.action'
import { getMe } from '../../api/get'

const App: React.FC = () => {
  const dispatch = useDispatch()
  console.log(process.env.REACT_APP_REDIRECT_URI)
  React.useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token') || 'null')
    if (token) {
      getMe().then((data) => {
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
          <PrivateRoute exact path="/favourites" component={Favourites} />
          <Route exact path="/auth-verify" component={AuthVerify} />
        </Switch>
      </div>
    </div>
  )
}

export default App
