import SecurityService from '@/services/security.service'

// Mutation types
const SIGN_IN = 'security/SIGN_IN'
const SIGN_UP = 'security/SIGN_UP'

function initialState () {
  return {
    // token: localStorage.getItem(USER_TOKEN_NAME) || '',
    token: '',
    // loggedInUser: JSON.parse(localStorage.getItem(USER_KEY_NAME)) || { initials: [] },
    loggedInUser: {}
  }
}

// initial state
const state = initialState()

// loginSuccessCallback function
function loginSuccessCallback (response, commit, method) {
  // let token = response.data.token
  let token = 'FakeToken'
  // localStorage.setItem(USER_TOKEN_NAME, token)
  let user = {
    email: response.email
  }
  /* let user = {
    id: response.data.id,
    username: response.data.username,
    firstName: response.data.first_name,
    lastName: response.data.last_name,
    initials: response.data.initials,
    isPatient: response.data.is_patient,
    role: response.data.role,
    isAccountActive: response.data.account_active
  }
  localStorage.setItem(USER_KEY_NAME, JSON.stringify(user))
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}` */
  if (commit) {
    commit(method, { token, user })
  }
}

// Actions
const actions = {
  SIGN_IN ({ commit }, credentials) {
    return SecurityService.signIn(credentials)
      .then((response) => {
        loginSuccessCallback(response, commit, SIGN_IN)
      })
      .catch((error) => {
        return error.response
      })
  },

  SIGN_UP ({ commit }, data) {
    return SecurityService.signUp(data)
      .then((response) => {
        loginSuccessCallback(response, commit, SIGN_UP)
      })
      .catch((error) => {
        return error.response
      })
  }
}

// Getters
const getters = {
  isAuthenticated: state => !!state.token
}

// Mutations
const mutations = {
  [SIGN_IN] (state, data) {
    const { token, user } = data
    state.token = token
    state.loggedInUser = user
  },

  [SIGN_UP] (state, data) {
    const { token, user } = data
    state.token = token
    state.loggedInUser = user
  }
}

export default {
  state: { ...state },
  actions,
  getters,
  mutations
}
