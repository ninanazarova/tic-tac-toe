import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Game.vue'),
  },
  {
    path: '/configurations',
    name: 'Configurations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Configurations.vue'),
  },
  {
    path: '/history',
    name: 'History',

    component: () => import('../views/History.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
