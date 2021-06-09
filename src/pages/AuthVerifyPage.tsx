import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogin } from '../redux/actions/user.action'
import { Loader } from '../ui/Loader/Loader'
import { toast } from 'react-toastify'
import { googleAuth } from '../api/rest/auth'
import { getQuery } from '../helpers/api'

export default function AuthVerifyPage() {
  const history = useHistory()
  const dispatch = useDispatch()
  const code = getQuery('code')

  React.useEffect(() => {
    if (code) {
      const redirect_uri = process.env.REACT_APP_REDIRECT_URI || ''
      googleAuth({ code, redirect_uri }).then((data) => {
        toast.dark(`👽 You are successfully logged in!`)
        dispatch(
          userLogin({
            token: data.accessToken,
            ...data,
          })
        )
        history.push('/')
      })
    }
  }, [code, history, dispatch])

  return <Loader />
}
