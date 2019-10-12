import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'
import VueChatScroll from 'vue-chat-scroll'
import AuthService from "./AuthService"
import "./lib/QuickComponents"
//Vue.config.productionTip = false
Vue.use(VueChatScroll)



async function init() {
  let user = await AuthService.Authenticate()
  if (user) { store.commit("setUser", user) }
  else { router.push({ name: 'login' }) }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
init()
// new Vue({
//   router,
//   store,
//   render: function (h) { return h(App) }
// }).$mount('#app')

store.dispatch("initializeSocket")
