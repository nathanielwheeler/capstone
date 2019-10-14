import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'
import io from "socket.io-client"

let socket = {};



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
    chats: [],
    currentChat: {},
    messages: {},
    subscribedChats: [],
    currentMessage: {},
    characters: [],
    currentCharater: {},
    activeCharacter: {},
    inventory: [],
    items: {},
    groups: [],
    activeGroup: {},



  },
  mutations: {
    resetState(state) {
      state.user = {}
      state.chats = []
      state.messages = {}
      state.currentChat = {}
      state.subscribedChats = []
      state.characters = []
      state.activeCharacter
    },
    setUser(state, user) {
      state.user = user
    },
    setChats(state, chats) {
      state.chats = chats
    },
    setSubscribedChats(state, chats) {
      state.subscribedChats = chats
    },
    setCharacter(state, payload) {
      state.characters = payload
    },
    setActiveCharacter(state, payload) {
      state.activeCharacter = payload
    },
    setCurrentChat(state, chat) {
      state.currentChat = chat
    },
    setItem(state, payload) {
      state.items = payload
    },
    setMessages(state, data) {
      Vue.set(state.messages, data.chatId, data.messages)
    },

    editMessage(state, payload) {
      state.currentMessage = payload
    },
  },
  actions: {
    initializeSocket({
      commit,
      dispatch
    }) {
      // socket = io('//localhost:3000')
      socket = io('//post-n-play.herokuapp.com')
      socket.on('CONNECTED', data => {
        console.log('Connected to socket')
      })
      socket.on('addMessage', data => {
        dispatch('getMessages', data.chat)
      })
    },
    joinRoom({
      commit,
      dispatch
    }, boardId) {
      socket.emit('join', {
        boardId
      })
    },
    leaveRoom({
      commit,
      dispatch
    }, boardId) {
      socket.emit('leave', {
        boardId
      })
    },
    async register({
      commit,
      dispatch
    }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({
          name: "home"
        })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({
      commit,
      dispatch
    }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({
          name: "home"
        })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({
      commit,
      dispatch
    }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({
          name: "login"
        })
      } catch (e) {
        console.warn(e.message)
      }
    },


    async getChats({
      commit,
      dispatch
    }) {
      try {
        let res = await api.get('/chat')
        commit('setChats', res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async createCharacter({
      commit,
      dispatch
    }, characterData) {
      try {
        await api.post('/characters', characterData)
        dispatch('getCharacters')
      } catch (error) {
        console.error(error)
      }
    },

    async deleteCharacter({
      commit,
      dispatch
    }, characterId) {
      try {
        await api.delete('/characters/' + characterId)
        dispatch('getCharacters')
      } catch (error) {
        console.error(error)
      }
    },

    async editCharacter({
      commit,
      dispatch
    }, character) {
      try {
        let change = await api.put('/characters/' + character._id, character)
        commit('setCharacter', change)
        dispatch('getCharacters')
      } catch (error) {
        console.error(error)
      }
    },

    async getCharacters({
      commit,
      dispatch
    }) {
      try {
        let res = await api.get('/characters')
        commit('setCharacter', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getCharacter({
      commit,
      dispatch
    }, characterId) {
      try {
        let res = await api.get('/characters/' + characterId)
        commit('setActiveCharacter', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    resetActiveCharacter({
      commit,
      dispatch
    }) {
      commit('setActiveCharacter', {})
    },
    async changeActiveCharacter({
      commit,
      dispatch
    }, characterId) {
      try {
        let res = await api.get("/characters/" + characterId)
        commit('setActiveCharacter', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addChat({
      commit,
      dispatch
    }, chatData) {
      try {
        await api.post('chat', chatData)
        dispatch('getChats')
      } catch (error) {
        console.error(error)

      }

    },

    async getChat({
      commit,
      dispatch
    }, chatId) {
      try {
        let res = await api.get("chat/" + chatId)
        commit('setCurrentChat', res.data)
      } catch (error) {
        console.error(error)
      }
    },


    async getMessages({
      commit,
      dispatch
    }, chatId) {
      try {
        let res = await api.get("chat/" + chatId + "/messages")
        let data = {
          chatId,
          messages: res.data
        }
        commit('setMessages', data)
      } catch (error) {
        console.error(error)
      }
    },
    async addMessage({
      commit,
      dispatch
    }, message) {
      try {
        let res = await api.post("/messages", message)
        dispatch("getMessages", message.chat)
      } catch (error) {
        console.error(error)
      }
    },

    async deleteChat({
      commit,
      dispatch
    }, payload) {
      try {
        let res = await api.delete('/chat/' + payload._id)
        dispatch('getChats')
      } catch (error) {
        console.error(error)
      }
    },
    async deleteMessage({
      commit,
      dispatch
    }, payload) {
      try {
        let res = await api.delete('/messages/' + payload._id)
        dispatch('getMessages', payload.chat._id)
      } catch (error) {
        console.error(error)
      }
    },
    async editMessage({
      commit,
      dispatch
    }, payload) {

      try {
        let res = await api.put('/messages/' + payload._id, payload)
        commit('editMessage', res.data)
        dispatch('getMessages', payload.chat._id)
      } catch (error) {
        console.error(error)
      }
    },
    async getSubscribedChats({
      commit,
      dispatch
    }) {
      try {
        let res = await api.get("chat/subscriptions")
        commit('setSubscribedChats', res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async unsubscribe({
      commit,
      dispatch
    }, chatId) {
      try {
        let res = await api.delete('/chat/subscriptions/' + chatId)
        dispatch('getSubscribedChats')
      } catch (error) {
        console.error(error)
      }
    },

    async subscribe({
      commit,
      dispatch
    }, chatId) {
      try {
        let res = await api.post('/chat/subscriptions/' + chatId)
        dispatch('getChats')

      } catch (error) {

      }
    }
  }
})