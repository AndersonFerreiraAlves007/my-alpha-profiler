import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'
import HomePage from './pages/Home'
import EditProfilePage from './pages/EditProfile'

function App () {
  return (
    <div >
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="sign_up" element={<SignUpPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="edit_profile" element={<EditProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
