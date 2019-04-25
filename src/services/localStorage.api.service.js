import ENDPOINTS from './endpoints'

// Bcrypt
const bcrypt = require('bcryptjs')

const USER_REPOSITORY = 'users'

// Local Storage API Service
const LocalStoageApiService = {

  init () {
    return this
  },

  post (endpoint, payload) {
    let response
    if (endpoint === ENDPOINTS.SIGN_UP) {
      response = this.signUp(payload)
    } else if (endpoint === ENDPOINTS.SIGN_IN) {
      response = this.signIn(payload)
    }

    return response
  },

  signUp (payload) {
    return new Promise(function (resolve, reject) {
      let users = JSON.parse(localStorage.getItem(USER_REPOSITORY)) || []
      let existingUser = users.find(function (user) {
        return user.email === payload.email
      })
      if (existingUser) {
        let error = { response: { status: 400, data: { error: 'Existing user' } } }
        reject(error)
      } else {
        payload.password = bcrypt.hashSync(payload.password, 8)
        this.users.push(payload)
        localStorage.setItem(USER_REPOSITORY, JSON.stringify(users))
        resolve(payload)
      }
    })
  },

  signIn (payload) {
    return new Promise(function (resolve, reject) {
      let response
      let users = JSON.parse(localStorage.getItem(USER_REPOSITORY)) || []
      let existingUser = users.find(function (user) {
        if (user.email === payload.email) {
          return user
        }
      })
      if (existingUser) {
        // validate password
        if (bcrypt.compareSync(payload.password, existingUser.password)) {
          response = { status: 200, email: existingUser.email }
          resolve(response)
        } else { // wrong password
          response = { response: { status: 400, data: { error: 'Invalid credentials' } } }
          reject(response)
        }
      } else {
        response = { response: { status: 404, data: { error: 'User not found' } } }
        reject(response)
      }
    })
  }
}

export default LocalStoageApiService
