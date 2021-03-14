import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import App from './components/App'

import store from './redux/store'
import 'react-toastify/dist/ReactToastify.css'
import 'normalize.css'
import './scss/global.scss'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
