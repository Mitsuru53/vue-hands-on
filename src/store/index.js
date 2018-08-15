import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    user: ''
  },
  mutations: {
    SET_POST (state, post) {
      state.posts.push(post)
    },
    SET_USER (state, user) {
      state.user = user
    },
    REMOVE_USER (state) {
      state.user = ''
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
    },
    async loginWithPassword ({commit}, user) {
      try {
        commit('SET_USER', await firebase.auth().signInWithEmailAndPassword(user.email, user.password))
      } catch (error) {
        console.log('login error', error)
      }
    },
    async registerWithPassword ({commit}, user) {
      try {
        commit('SET_USER', await firebase.auth().createUserWithEmailAndPassword(user.email, user.password))
      } catch (error) {
        console.log('register error', error)
      }
    },
    async logoutFirebase ({commit}) {
      try {
        await firebase.auth().signOut()
        commit('REMOVE_USER')
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {
    posts (state) {
      return state.posts
    },
    currentUser (state) {
      return state.user.user
    }
  }
})
