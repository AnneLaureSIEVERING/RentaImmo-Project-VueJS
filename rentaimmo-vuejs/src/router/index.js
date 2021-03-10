import Vue from 'vue'
import VueRouter from 'vue-router'
import Estate from '../views/Estate'
import Rentability from '../views/Rentability'

Vue.use(VueRouter)

const routes = [
  {
    path: '/estate',
    name: 'Estate',
    component: Estate
  },
  {
    path: '/rentability',
    name: 'Rentability',
    component: Rentability
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
