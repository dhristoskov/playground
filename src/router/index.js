import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Registration from '../components/Auth/Registration'
import Library from '../components/Library/Library'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/auth', name: 'Registration', component: Registration },
  { path: '/library', name: 'Library', component: Library },
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
