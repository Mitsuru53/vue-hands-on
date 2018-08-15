import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POST (state, post) {
      state.posts.push(post)
    }
  },
  actions: {
    async setPost ({commit}, post) {
      try {
        await firebase.firestore().collection('posts').add(post)
        commit('SET_POST', post)
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {
    posts (state) {
      return state.posts
    }
  }
})
