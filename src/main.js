// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'
import store from './store'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyCW06_JTd45vTi_yTAMFzDXF-dBECcwegE',
  authDomain: 'boot-vue.firebaseapp.com',
  databaseURL: 'https://boot-vue.firebaseio.com',
  projectId: 'boot-vue',
  storageBucket: 'boot-vue.appspot.com',
  messagingSenderId: '858055789153'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
