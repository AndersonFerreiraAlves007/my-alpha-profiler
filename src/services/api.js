import { HOST_API, HOST_FRONTEND } from '../utils/constants.js'
import { deleteCookies } from '../utils/cookies.js'

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
      window.location.replace('/')
    } else {
      if (data.status === 404) {
        const dados = await data.json()
        throw dados.message
      }
    }
  }
}

class BancoDados {
  constructor (host) {
    this.host = host
  }

  async getUser (id) {
    return await request(`${this.host}/users/${id}`, 'GET')
  }

  async login (email, password) { // o signin é feito com email <-----------
    const { user_id: userId, token } = await request(`${this.host}/users/login`, 'POST', {
      email,
      password
    })

    return {
      userId,
      token
    }
  }

  async register (username, password) {
    const user = await request(`${this.host}/users`, 'POST', {
      username,
      password
    })
    return user
  }

  async listUsers () {
    return await request(`${this.host}/users`, 'GET')
  }

  async updateUser (id, body) {
    return await request(`${this.host}/users/${id}`, 'PUT', body)
  }

  async deleteUser (id, body) {
    return await request(`${this.host}/users/${id}`, 'DELETE', body)
  }
}

const serverConnection = new BancoDados(HOST_API)

export { serverConnection, BancoDados }
