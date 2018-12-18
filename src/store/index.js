import Vue from 'vue'
import Vuex from 'vuex'
// Modules
import security from '@/store/modules/security'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    security
  },
  strict: debug
})
