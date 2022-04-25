import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignInPage from './routes/signin'
import SignUpPage from './routes/signup'
import HomePage from './routes/home'
import ProfilePage from './routes/profile'

function App () {
  return (
    <div >
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="sign_up" element={<SignUpPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="edit_profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
