import { postRequest } from '../api/post'
import { getQuery } from '../helpers/api.hepler'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogin } from '../redux/actions/user.action'

export default function AuthVerify() {
  const history = useHistory()

  const dispatch = useDispatch()

  React.useEffect(() => {
    postRequest({
      code: getQuery('code'),
      redirect_uri: 'http://localhost:3000/auth-verify',
    }).then((data) => {
      if (data.ok) {
        dispatch(userLogin(data))
      }
      history.push('/')
    })
  }, [history, dispatch])

  return null
}
