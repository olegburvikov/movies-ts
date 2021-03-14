import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="full-page-centered">
        <div className="container">
          <Main />
        </div>
      </div>
    </>
  )
}

export default MainPage
