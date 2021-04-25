import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/reducers/root.reducer'
import { setIsUserLogged } from '../redux/actions/user.action'
import { Loader } from '../ui/Loader/Loader'
import { Root } from '../pages'

// refactor api service
// add transition group on pages
// add transition for another items
// add storybook

function App() {
  const dispatch = useDispatch()
  const is_auth = useSelector((state: RootState) => state.user.is_auth)

  React.useEffect(() => {
    dispatch(setIsUserLogged())
  }, [dispatch])

  return is_auth !== null ? <Root /> : <Loader />
}

export default App
