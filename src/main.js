// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase/app'
import store from './store'
import VueSwal from 'vue-swal'
require('dotenv').config()
Vue.use(VueSwal)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const config = {
  apiKey: JSON.stringify(process.env.apiKey),
  authDomain: JSON.stringify(process.env.authDomain),
  databaseURL: JSON.stringify(process.env.databaseURL),
  projectId: JSON.stringify(process.env.projectId),
  storageBucket: JSON.stringify(process.env.storageBucket),
  messagingSenderId: JSON.stringify(process.env.messagingSenderId)
}
console.log('process', process.env)

firebase.initializeApp(config)

const firestore = firebase.firestore()
const settings = {timestampsInSnapshots: true}
firestore.settings(settings)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !firebase.auth().currentUser) {
    next({path: '/'})
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
