import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Auth from '../views/Auth'
import Library from '../components/Library/Library'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/auth', name: 'Auth', component: Auth },
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
