<template>
  <div>
    <hr>
    <h1>{{$t('user info')}}</h1>
    <span><button @click='userLogout()'>{{$t('logout')}}</button></span>
    <span><button @click='userLogoutAll()'>{{$t('logout all')}}</button></span>
    <span><button @click='toEditInfo()'>{{$t('edit info')}}</button></span><br>
    <button v-for='language in languages' v-bind:key='language.language' @click='localeChange(language.locale)'>
      {{language.language}}
    </button>
    <br><span>{{$t('user')}}: <b>{{username}}</b></span>
    <br><span>{{$t('language')}}: <b>{{userLanguage}}</b></span>
    <br><span>{{$t('email')}}: <b>{{email}}</b></span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'UserInfo',
  computed: mapGetters([
    'username',
    'userLanguage',
    'email',
    'avatar'
  ]),
  methods: {
    ...mapActions(['userInfo', 'userLogout', 'userLogoutAll']),
    localeChange (locale) {
      this.$root.$i18n.locale = locale
    },
    toEditInfo () {
      this.$router.push({ name: 'EditInfo' })
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
  beforeCreate () {
  },
  watch: {
    userLanguage: function (val) {
      this.localeChange(val)
    }
  },
  created () {
    this.userInfo()
  }
}
</script>

<style scoped>

</style>
