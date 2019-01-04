import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/home.vue'
import Login from './views/Login/login.vue'
import Search from './components/destSearch/destSearch.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  /*base: process.env.BASE_URL,*/
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/', redirect: 'search'
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        },
      ]
    },
    {
      path: '**', redirect: '/'
    }
  ]
})
