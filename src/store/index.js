import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    folders: [],
    myMusic: []
  },
  mutations: {
    //  Folders mutation
    add: (state, payload) => {
      return state.folders.push({ id: Date.now(), name: payload })
    },
    removeFolder: (state, payload) => {
      state.folders = state.folders.filter(item => item.id !== payload)
      return state.folders
    },
    //  My Music mutation
    addSong: (state, payload) => {
      return state.myMusic.push(payload)
    },
    removeSong: (state, payload) => {
      return state.myMusic.filter(song => song.id !== payload.id)
    }
  },
  actions: {
  },
  modules: {
  }
})
