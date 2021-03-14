import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers/root.reducer'

interface IPrivateRouteProps {
  component: React.FC
  path: string
  exact: boolean
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  component,
  path,
  exact,
}) => {
  const isAuth = useSelector((state: RootState) => state.user.is_auth)

  return isAuth ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/" />
  )
}

export default PrivateRoute
