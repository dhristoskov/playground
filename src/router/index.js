import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import RegisterPage from '../views/RegisterPage'
import LoginPage from '../views/LoginPage'
import Library from '../views/Library'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/register/:email', name: 'Register', component: RegisterPage },
  { path: '/login/:email', name: 'Login', component: LoginPage },
  { path: '/library', name: 'Library', component: Library },
  //  Redirect unexisting paths
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  //  Change default active and exact-active class names
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

export default router
