import ApiService from './api.service'
import ENDPOINTS from './endpoints'

// Security Service
const SecurityService = {

  signUp (data) {
    return ApiService.post(ENDPOINTS.SIGN_UP, data)
  },

  signIn (credentials) {
    return ApiService.post(ENDPOINTS.SIGN_IN, credentials)
  }
}

export default SecurityService
