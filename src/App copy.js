import React from 'react'
import { Router } from 'react-router-dom'
import { AuthProvider } from './context/auth.context'
import Routes from './routes'
import history from './history'

function App () {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  )
}

export default App
