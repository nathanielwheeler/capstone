import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    groups: [],
    characters: [],
    activeGroup: {},
    currentCharater: {},
    inventory: [],
    items: {},
    chats: [],
    currrentChat: {}




  },
  mutations: {
    resetState(state) {
      state.user = {}
    },
    setUser(state, user) {
      state.user = user
    },
    setGroups(state, groups) {
      state.groups = groups
    },
    setCharacter(state, payload) {
      state.characters = payload
    },
    setItem(state, payload) {
      state.items = payload
    }
  },
  actions: {
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "home" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({ name: "home" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async getGroups({ commit, dispatch }, payload) {
      try {
        let res = await api.get('/Groups')
        commit('setGroup', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createCharacter({ commit, dispatch }, payload) {
      try {
        let res = await api.post('/Characters')
        commit('creatCharacter', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getCharacter({ commit, dispatch }, payload) {
      try {
        commit('getCharacter({ commit, dispatch}, payload')
      } catch (error) {
        console.error(error)
      }
    }
  },
})




