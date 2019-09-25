import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'


let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

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
    currentChat: {},
    messages: {}



  },
  mutations: {
    resetState(state) {
      state.user = {}
    },
    setUser(state, user) {
      state.user = user
    },
    setChats(state, chats) {
      state.chats = chats
    },
    setCharacter(state, payload) {
      state.characters = payload
    },
    setCurrentChat(state, chat) {
      state.currentChat = chat
    },
    setItem(state, payload) {
      state.items = payload
    },
    setMessages(state, data) {
      Vue.set(state.messages, data.chatID, data.messages)
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


    async getChats({ commit, dispatch }) {
      try {
        let res = await api.get('/chat')
        commit('setChats', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    // async createCharacter({ commit, dispatch }, payload) {
    //   try {
    //     let res = await api.post('/Characters')
    //     commit('creatCharacter', res.data)
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
    // async getCharacter({ commit, dispatch }, payload) {
    //   try {
    //     commit('getCharacter({ commit, dispatch}, payload')
    //   } catch (error) {
    //     console.error(error)
    //   }
    // }

    async addChat({ commit, dispatch }, chatData) {
      try {
        await api.post('chat', chatData)
        dispatch('getChats')
      } catch (error) {
        console.error(error)

      }

    },

    async  getChat({ commit, dispatch }, chatId) {
      try {
        let res = await api.get("chat/" + chatId)
        commit('setCurrentChat', res.data)
      } catch (error) {
        console.error(error)
      }
    }
    ,
    async getMessages({ commit, dispatch }, chatId) {
      try {
        let res = await api.get("chat/" + chatId + "/messages")
        let data = {
          chatId,
          messages: res.data
        }
        commit('setMessages', data)
      }
      catch (error) {
        console.error(error)
      }
    }

  }
}
)

// async getComments({ commit, dispatch }, taskId) {

//   try {
//     let res = await api.get("tasks/" + taskId + "/comments")
//     let data = {
//       taskId,
//       comments: res.data
//     }
//     commit('setComments', data)
//   } catch (error) { console.error(error) }
// },




