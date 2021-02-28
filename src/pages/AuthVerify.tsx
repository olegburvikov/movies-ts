import { googleAuth } from '../api/post'
import { getQuery } from '../helpers/api.hepler'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogin } from '../redux/actions/user.action'
import { Loader } from '../components/UI/Loader/Loader'
import { toast } from 'react-toastify'

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
          toast(`👽 You are successfully logged in!`)
          dispatch(
            userLogin({
              token: data.accessToken,
              ...data,
            })
          )
        }
        history.push('/')
      })
    }
  }, [code, history, dispatch])

  return <Loader />
}
