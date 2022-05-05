import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../components/Header'
import HomeBody from '../../components/HomeBody'

const HomePage = () => {
  const token = localStorage.getItem('token')
  /* return (
    <div>
      {token
        ? (
        <div>
          <Header />
          <HomeBody />
        </div>
          )
        : (
            <Navigate to='/' />
          )}
    </div>
  ) */
  if (token) {
    const homeHeader = React.createElement(
      Header,
      {},
      []
    )

    const homeBody = React.createElement(
      HomeBody,
      {},
      []
    )

    const div = React.createElement(
      'div',
      {},
      [homeHeader, homeBody]
    )

    return React.createElement(
      'div',
      {},
      [div]
    )
  } else {
    const navigate = React.createElement(
      Navigate,
      { to: '/' },
      []
    )

    return React.createElement(
      'div',
      {},
      [navigate]
    )
  }
}

export default HomePage
