import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignInPage from './pages/signin'
import SignUpPage from './pages/signup'
import ProfilePage from './pages/profile'
import HomePage from './pages/home/index.jsx'

function App () {
  console.log('alow')
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<SignInPage />} />
        <Route exact path="sign_up" element={<SignUpPage />} />
        <Route exact path="home" element={<HomePage />} />
        <Route exact path="edit_profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
