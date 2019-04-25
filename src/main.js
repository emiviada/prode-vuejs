import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ApiService from './services/api.service'
import VeeValidate from 'vee-validate'
import './registerServiceWorker'

// Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VModal from 'vue-js-modal'

library.add(faFacebookF)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VModal)
Vue.use(VeeValidate)
Vue.config.productionTip = false

ApiService.init('local')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
