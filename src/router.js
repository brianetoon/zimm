import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Installation from './views/Installation'
import InstallChild from './views/InstallChild'
import SystemUpgrades from './views/SystemUpgrades'
// import SystemsChild from './views/SystemsChild'
import Accessories from './views/Accessories'
import AccessoryChild from './views/AccessoryChild'
import TuneUp from './views/TuneUp'
import TuneupChild from './views/TuneupChild'
import About from './views/About'

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
      path: '/installation/:install_slug',
      name: 'install-child',
      component: InstallChild
    },
    {
      path: '/system-upgrades',
      name: 'system-upgrades',
      component: SystemUpgrades
    },
    // {
    //   path: '/systems/:systems_slug',
    //   name: 'systems-child',
    //   component: SystemsChild
    // },
    {
      path: '/accessories',
      name: 'accessories',
      component: Accessories
    },
    {
      path: '/accessories/:accessory_slug',
      name: 'accessory-child',
      component: AccessoryChild
    },
    {
      path: '/tune-up-and-repair',
      name: 'tune-up',
      component: TuneUp
    },
    {
      path: '/tune-up-and-repair/:tuneup_slug',
      name: 'tune-up-child',
      component: TuneupChild
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    { 
      path: '*', 
      redirect: '/' 
    }
  ]
})
