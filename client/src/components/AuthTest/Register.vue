<template>
  <div>
    <h1>{{ $t('register')}}</h1>
    <div>
      <form @submit='onRegister'>
        <input type='text' v-model='username' placeholder='Username'><br>
        <input type='text' v-model='email' placeholder='Email'><br>
        <input type='text' v-model='language' placeholder='Language'><br>
        <input type='password' v-model='password' placeholder='Password'><br>
        <textarea v-model="self_intro" cols="22" rows="10" placeholder='Self introduction'></textarea><br>
        <input type='currency' v-model='currency' placeholder='Currency'><br>
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
      language: 'en',
      self_intro: '',
      currency: 'usd'
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
        language: this.language,
        self_intro: this.self_intro,
        currency: this.currency
      }
      this.register(userInfo)
    }
  }
}
</script>

<style scoped>

</style>
