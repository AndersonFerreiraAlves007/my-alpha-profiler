import React, { createContext } from 'react'
import useAuth from './hooks/useAuth'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const { autheticated, setUserData, handleLogin, handleLogout, userData, retrieveData } = useAuth()
  const value = { autheticated, setUserData, handleLogin, handleLogout, userData, retrieveData }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
