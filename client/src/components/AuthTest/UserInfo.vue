<template>
  <div>
    <hr>
    <h1>{{$t('user info')}}</h1>
    <span><button @click='userLogout()'>{{$t('logout')}}</button></span>
    <span><button @click='userLogoutAll()'>{{$t('logout all')}}</button></span><br>
    <button v-for='language in languages' v-bind:key='language.language' @click='localeChange(language.locale)'>
      {{language.language}}
    </button>
    <span>{{$t('user')}}: <b>{{username}}</b></span><br>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'UserInfo',
  computed: mapGetters(['username']),
  methods: {
    ...mapActions(['userInfo', 'userLogout', 'userLogoutAll']),
    localeChange (locale) {
      this.$i18n.locale = locale
    }
  },
  data () {
    return {
      languages: [
        {locale: 'vi', language: 'VI'},
        {locale: 'en', language: 'EN'},
        {locale: 'ja', language: 'JA'}
      ]
    }
  },
  created () {
    this.userInfo()
  }
}
</script>

<style scoped>

</style>
