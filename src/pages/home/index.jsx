import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../components/Header'
import HomeBody from '../../components/HomeBody'

const HomePage = () => {
  const token = localStorage.getItem('token')
  return (
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
  )
}

export default HomePage
