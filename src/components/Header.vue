<template>
  <b-nav>
    <b-nav-item v-if="!currentUser">
      <router-link to="/">Login</router-link>
    </b-nav-item>
    <b-nav-item v-else>
      <p @click="logout">logout</p>
    </b-nav-item>
    <b-nav-item>
      <router-link to="/posts">posts</router-link>
    </b-nav-item>
  </b-nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Header',
  methods: {
    ...mapActions(['logoutFirebase']),
    logout () {
      this.logoutFirebase()
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  }
}
</script>
