import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    folders: []
  },
  mutations: {
    //  Folders mutation
    add: (state, payload) => {
      state.folders.push({ id: Date.now(), name: payload })
    }
  },
  actions: {
  },
  modules: {
  }
})
