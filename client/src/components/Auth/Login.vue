<template>
  <div>
    <hr>
    <h1>{{$t('login')}}</h1>
    <div>
      <form @submit="onLogin">
        <input type="text" v-model="username" placeholder="email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <input type="submit" :value='$t("login")' class="btn btn-success">
      </form>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      username: 'conmaxau@gmail.com',
      password: 'hahahahaha'
    }
  },
  methods: {
    ...mapActions(['login']),
    onLogin (e) {
      e.preventDefault()
      let userInfo = {
        username: this.username,
        password: this.password
      }
      this.login(userInfo)
    }
  }
}
</script>

<style scoped>

</style>
