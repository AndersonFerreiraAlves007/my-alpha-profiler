import React/* , { useContext } */ from 'react'
import { Routes, Route/* , useNavigate */ } from 'react-router-dom'
// import { AuthContext } from './context/auth.context.jsx'
import SignInPage from './pages/signin'
import SignUpPage from './pages/signup'
import ProfilePage from './pages/profile'
import HomePage from './pages/home/index.jsx'

function App () {
  /* const { authenticated } = useContext(AuthContext)
  const navigate = useNavigate() */
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<SignInPage />} />
        <Route exact path="sign_up" element={<SignUpPage />} />
        {/* {authenticated
          ? ( */}
          <Route exact path="home" element={<HomePage />} />
          {/*   )
          : (
              navigate('/')
            )} */}
        {/* {authenticated
          ? ( */}
          <Route exact path="edit_profile" element={<ProfilePage />} />
          {/*   )
          : (
              navigate('/')
            )} */}
      </Routes>
    </div>
  )
}

export default App
