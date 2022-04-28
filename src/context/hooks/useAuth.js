import { useState, useEffect } from 'react'

import history from '../../history'
import { serverConnection } from '../../services/api'

export default function useAuth () {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  async function handleLogin () {
    const { token } = await serverConnection.login

    localStorage.setItem('token', JSON.stringify(token))
    setAuthenticated(true)
    history.push('home')
  }

  function handleLogout () {
    setAuthenticated(false)
    localStorage.removeItem('token')
    history.push('/')
  }

  return { authenticated, loading, handleLogin, handleLogout }
}
