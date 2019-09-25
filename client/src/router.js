import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Groups from './views/Groups.vue'
import CurrentChat from './views/CurrentChat.vue'
import Chats from './views/Chats.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/groups',
      name: 'group',
      component: Groups
    },
    {
      path: '/chats',
      name: 'chats',
      component: Chats
    },
    {
      path: "*",
      redirect: '/login'
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
