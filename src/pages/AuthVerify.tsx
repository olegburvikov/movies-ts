import { googleAuth } from '../api/post'
import { getQuery } from '../helpers/api.hepler'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogin } from '../redux/actions/user.action'

export default function AuthVerify() {
  const history = useHistory()

  const dispatch = useDispatch()
  const code = getQuery('code')

  React.useEffect(() => {
    if (code) {
      googleAuth({
        code,
        redirect_uri: process.env.REACT_APP_REDIRECT_URI || '',
      }).then((data) => {
        if (data.ok) {
          dispatch(userLogin(data))
        }
        history.push('/')
      })
    }
  }, [code, history, dispatch])

  return null
}
