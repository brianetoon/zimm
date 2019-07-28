import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Installation from './views/Installation'
import Systems from './views/Systems'
import Accessories from './views/Accessories'
import TuneUp from './views/TuneUp'
import About from './views/About'
import Test from './views/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/installation',
      name: 'installation',
      component: Installation
    },
    {
      path: '/systems',
      name: 'systems',
      component: Systems
    },
    {
      path: '/accessories',
      name: 'accessories',
      component: Accessories
    },
    {
      path: '/tune-up-and-repair',
      name: 'tune-up',
      component: TuneUp
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
