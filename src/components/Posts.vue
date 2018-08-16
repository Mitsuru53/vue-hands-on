<template>
  <div>
    <p>quantity: {{posts.length}}</p>
    <div v-for="(post, index) in posts" :key="index">
      <p>{{post.title}}</p>
      <p>{{post.contents}}</p>
    </div>
    <form @submit.prevent="submitPost">
      <div class="form-group">
        <input class="form-control mb-2" type="text" v-model="title"/>
        <textarea class="form-control mb-2" v-model="contents"></textarea>
        <input type="submit" class="btn btn-primary" value="submit">
      </div>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import firebase from 'firebase'

export default {
  name: 'Posts',
  data () {
    return {
      title: '',
      contents: ''
    }
  },
  computed: {
    ...mapGetters(['posts'])
  },
  methods: {
    async submitPost () {
      const post = {
        title: this.title,
        contents: this.contents,
        user_id: firebase.auth().currentUser.uid
      }
      await this.setPost(post)
      await this.$swal('success')
      await this.resetForm()
    },
    resetForm () {
      this.title = ''
      this.contents = ''
    },
    ...mapActions([
      'setPost'
    ])
  }
}
</script>
