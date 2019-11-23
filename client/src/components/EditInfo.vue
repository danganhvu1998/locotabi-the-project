<template>
  <div>
    <h1>Edit Information</h1><br>
    <div>
      <form>
        <label for="username">{{$t('user')}}: </label>
        <input type="text" v-model='username'><br>
        <label for="language">{{$t('language')}}: </label>
        <input type="text" v-model='userLanguage'><br>
        <label for="password">{{$t('password')}}: </label>
        <input type="text" v-model='password'><br>
        <label for="self_intro">{{$t('self intro')}}: </label>
        <textarea v-model="self_intro" cols="30" rows="10"></textarea><br>
        <label for="currency">{{$t('currency')}}: </label>
        <input type="text" v-model='currency'><br>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'EditInfo',
  computed: mapGetters([
    'username',
    'userLanguage',
    'self_intro',
    'currency'
  ]),
  methods: {
    ...mapActions(['fetchUserInfo'])
  },
  data () {
    return {
      password: ''
    }
  },
  created () {
    this.fetchUserInfo()
  }
}
</script>

<style scoped>
label {
  vertical-align: top;
  display: inline-block;
}
</style>
