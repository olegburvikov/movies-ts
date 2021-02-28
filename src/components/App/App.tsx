import React from 'react'
import 'normalize.css'
import Header from '../Header/Header'
import Favourites from '../../pages/Favourites/Favourites'
import PrivateRoute from '../PrivateRoute'
import AuthVerify from '../../pages/AuthVerify'
import { Route, Switch } from 'react-router-dom'
import { Movie } from '../../pages/Movie/Movie'
import { useDispatch, useSelector } from 'react-redux'
import { setIsUserLogged } from '../../redux/actions/user.action'
import Main from '../../pages/Main/Main'
import { Loader } from '../UI/Loader/Loader'
import { RootState } from '../../redux/reducers/root.reducer'

/* TODO list
    - Добавить возможность удалить фильм из favourites
    - Добавить тёмную тему
    - Сделать редизайн поиска
  */

const App: React.FC = () => {
  const dispatch = useDispatch()
  const is_auth = useSelector((state: RootState) => state.user.is_auth)

  React.useEffect(() => {
    dispatch(setIsUserLogged())
  }, [dispatch])
  return (
    <div className="app">
      {is_auth !== null ? (
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/movie/:id" component={Movie} />
            <PrivateRoute exact path="/favourites" component={Favourites} />
            <Route exact path="/auth-verify" component={AuthVerify} />
          </Switch>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default App
