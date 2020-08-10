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
      state.folders.push({ id: Date.now(), name: payload })
    },
    //  My Music mutation
    addSong: (state, payload) => {
      state.myMusic.push(payload)
    },
    removeSong: (state, payload) => {
      state.myMusic.filter(song => song.id !== payload.id)
    }
  },
  actions: {
  },
  modules: {
  }
})
