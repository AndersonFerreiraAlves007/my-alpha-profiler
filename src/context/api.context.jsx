import React, { createContext } from 'react'

import { HOST_API, HOST_FRONTEND } from '../utils/constants'
import { deleteCookies } from '../utils/cookies.js'

import { useNavigate } from 'react-router-dom'

export const ApiContext = createContext()

export const ApiProvider = ({ children }) => {
  const navegate = useNavigate()

  async function request (url, method = 'GET', body = null) {
    let options = {}
    if (method === 'POST' || method === 'PUT') {
      options = {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': HOST_FRONTEND,
          'Access-Control-Allow-Credentials': true
        },
        credentials: 'include',
        body: JSON.stringify(body)
      }
    } else {
      options = {
        method,
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': HOST_FRONTEND,
          'Access-Control-Allow-Credentials': true
        },
        credentials: 'include'
      }
    }
    const data = await fetch(url, options)
    if (data.status >= 200 && data.status < 300) {
      const dados = await data.json()
      return dados
    } else {
      if (data.status === 403) {
        localStorage.clear()
        deleteCookies()
        navegate('/')
      } else {
        if (data.status === 404) {
          const dados = await data.json()
          throw dados.message
        }
      }
    }
  }

  async function getUser (id) {
    return await request(`${HOST_API}/users/${id}`, 'GET')
  }

  async function login (email, password) {
    const { user_id: userId, token } = await request(`${HOST_API}/users/login`, 'POST', {
      email,
      password
    })

    return {
      token,
      user_id: userId
    }
  }

  async function register (email, password) {
    const user = await request(`${HOST_API}/users`, 'POST', {
      email,
      password
    })
    return user
  }

  async function listUsers () {
    return await request(`${HOST_API}/users`, 'GET')
  }

  async function updateUser (id, body) {
    return await request(`${HOST_API}/users/${id}`, 'PUT', body)
  }

  async function deleteUser (id, body) {
    return await request(`${HOST_API}/users/${id}`, 'DELETE', body)
  }

  return (
    <ApiContext.Provider
      value={{
        getUser,
        login,
        register,
        listUsers,
        updateUser,
        deleteUser
      }}
    >
      {children}
    </ApiContext.Provider>)
}
