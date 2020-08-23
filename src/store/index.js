import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: []
  },
  mutations: {
    toggleChoice(state, id) {
      if (Array.isArray(state.selected)) {
        const includeId = state.selected.filter(item => item === id).length
        const index = state.selected.indexOf(id)
        if (!includeId) {
          state.selected.push(id)
        } else {
          state.selected.splice(index,1)
        }
      }
    }
  },
  actions: {
    toggleChoice({commit}, id){
      commit("toggleChoice", id)
    }
  },
  getters:{
    selected: s => s.selected
  }
})
