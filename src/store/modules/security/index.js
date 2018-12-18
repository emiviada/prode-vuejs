function initialState () {
  return {
    // token: localStorage.getItem(USER_TOKEN_NAME) || '',
    token: ''
    // sign_in_user: {},
    // loggedInUser: JSON.parse(localStorage.getItem(USER_KEY_NAME)) || { initials: [] },
    // myAccountData: {},
    // accounts: []
  }
}

// initial state
const state = initialState()

// Actions
const actions = {}

// Getters
const getters = {
  isAuthenticated: state => !!state.token
}

// Mutations
const mutations = {}

export default {
  state: { ...state },
  actions,
  getters,
  mutations
}
