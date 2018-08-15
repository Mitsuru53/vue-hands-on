import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POST (state, post) {
      console.log('mutations', 'posts')
      state.posts.push(post)
    }
  },
  actions: {
    setPost ({commit}, post) {
      commit('SET_POST', post)
    }
  },
  getters: {
    posts (state) {
      return state.posts
    }
  }
})
