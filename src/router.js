import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

// route level code-splitting
// this generates a separate chunk ($routeName.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// Layouts
const Layout = () => import(/* webpackChunkName: "common" */ '@/components/common/Layout')
// Security
const Login = () => import(/* webpackChunkName: "security" */ '@/components/security/Login')
const Register = () => import(/* webpackChunkName: "security" */ '@/components/security/Register')
// Dashboard
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/components/Dashboard')

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    // let role = store.getters.loggedInUser.role
    // if (hasRightRole(to, role)) {
    next()
    return
    // } else {
    //   next('/404')
    //   return
    // }
  }
  next('/login')
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Layout,
      beforeEnter: ifAuthenticated,
      redirect: () => {
        return { name: 'Dashboard' }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/crear-usuario',
      name: 'Register',
      component: Register,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: ifAuthenticated
    }
  ]
})
