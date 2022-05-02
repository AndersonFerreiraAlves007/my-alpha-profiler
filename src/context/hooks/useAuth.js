import { useState, useEffect, useContext } from 'react'
import { ApiContext } from '../api.context'
import { deleteCookies } from '../../utils/cookies'
import { useNavigate } from 'react-router-dom'

export default function useAuth () {
  const [authenticated, setAuthenticated] = useState(false)
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    email: '',
    birthday: ''
  })
  const { login, getUser } = useContext(ApiContext)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      setAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    console.log({ userData })
  }, [userData])

  async function handleLogin (email, password) {
    const { token, user_id: userID } = await login(email, password)
    localStorage.setItem('token', JSON.stringify(token))
    localStorage.setItem('userid', userID)
    setAuthenticated(true)
    setUserData({ ...userData, id: userID })
    navigate('home')
  }

  async function retrieveData (userID) {
    const { name, email, birth_date: birthDay } = await getUser(userID)
    setUserData({
      ...userData,
      name,
      email,
      birthday: birthDay
    })
  }

  function handleLogout () {
    setAuthenticated(false)
    setUserData({})
    localStorage.clear()
    deleteCookies()
    localStorage.removeItem('token')
    navigate('/')
  }

  return {
    authenticated,
    userData,
    handleLogin,
    handleLogout,
    setUserData,
    retrieveData
  }
}
