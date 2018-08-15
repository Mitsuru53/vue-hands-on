<template>
  <div>
    <div>
      <button class="btn btn-primary mb-3" v-show="isLogin" @click="isLogin = !isLogin">login</button>
      <button class="btn btn-success mb-3" v-show="!isLogin" @click="isLogin = !isLogin">register</button>
    </div>
    <template v-if="isLogin">
      <form @submit.prevent="login" class="form-group">
        <input type="email" v-model="email" class="form-control"/>
        <br>
        <input type="password" v-model="password" class="form-control"/>
        <br>
        <input type="submit" value="Login" class="btn btn-primary"/>
      </form>
    </template>
    <template v-else>
      <form @submit.prevent="register" class="form-group">
        <input type="email" v-model="email" class="form-control"/> email: {{ email }}
        <br>
        <input type="password" v-model="password" class="form-control"/> password: {{ password }}
        <br>
        <input type="submit" value="register" class="btn btn-success"/>
      </form>
    </template>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'Auth',
  data () {
    return {
      email: '',
      password: '',
      isLogin: true
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    ...mapActions([
      'loginWithPassword',
      'registerWithPassword'
    ]),
    login () {
      this.loginWithPassword({email: this.email, password: this.password})
    },
    register () {
      this.registerWithPassword({email: this.email, password: this.password})
    }
  }
}
</script>
