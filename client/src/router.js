import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Groups from './views/Groups.vue'
import GroupChat from './views/GroupChat.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/groups',
      name: 'group',
      component: Groups
    },
    {
      path: "*",
      redirect: '/'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
