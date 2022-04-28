import React, { createContext } from 'react'
import useAuth from './hooks/useAuth'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const { autheticated, loading, handleLogin, handleLogout } = useAuth()
  const value = { autheticated, loading, handleLogin, handleLogout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
