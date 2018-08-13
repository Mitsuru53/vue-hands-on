<template>
  <div id="app" >
    <div class="container">
      <Header />
      <form @submit.prevent="authSubmit" class="form-group">
        <input type="email" v-model="email" class="form-control"/> email: {{ email }}
        <br>
        <input type="password" v-model="password" class="form-control"/> password: {{ password }}
        <br>
        <input type="submit" value="submit" class="btn btn-success"/>
      </form>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    authSubmit () {
      console.log(this.email, this.password)
    }
  }
}
</script>

<style>
</style>
