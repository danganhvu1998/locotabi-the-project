<template>
  <div>
    <h1>{{ $t('register')}}</h1>
    <div>
      <form @submit='onRegister'>
        <input type='text' v-model='username' placeholder='Username'><br>
        <input type='text' v-model='email' placeholder='Email'><br>
        <input type='text' v-model='language' placeholder='Language'><br>
        <input type='password' v-model='password' placeholder='Password'><br>
        <input type='submit' :value="$t('register')">
      </form>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      username: 'Dang Anh Vu',
      email: 'conmaxau@gmail.com',
      password: 'hahahahaha',
      language: 'en'
    }
  },
  methods: {
    ...mapActions(['register']),
    async onRegister (e) {
      e.preventDefault()
      let userInfo = {
        name: this.username,
        email: this.email,
        password: this.password,
        language: this.language
      }
      this.register(userInfo)
    }
  }
}
</script>

<style scoped>

</style>
