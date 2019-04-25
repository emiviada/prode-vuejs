import LocalStorageApiService from './localStorage.api.service'
import AxiosApiService from './axios.api.service'

// Global API Service
const ApiService = {

  provider: null,

  init (provider) {
    // Vue.use(VueAxios, axios);
    // Vue.axios.defaults.baseURL = API_URL;
    let providerClass = provider === 'axios' ? AxiosApiService : LocalStorageApiService
    this.provider = providerClass.init()
  },

  post (endpoint, payload) {
    return this.provider.post(endpoint, payload)
  }
}

export default ApiService
