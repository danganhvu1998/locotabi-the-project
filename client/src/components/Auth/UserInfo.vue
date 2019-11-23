<template>
  <div>
<div class='navbar navbar-fixed-top'>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <a href="/">
       <div class="navbar-brand"><img src="../../assets/TheLocoLogo.png" width="90" height="90"></div>
      </a>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/how-the-loco-works">How The Loco works</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Language" right>
            <b-dropdown-item href="#">VI</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">JA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Currency" right>
            <b-dropdown-item href="#">VND</b-dropdown-item>
            <b-dropdown-item href="#">USD</b-dropdown-item>
            <b-dropdown-item href="#">YEN</b-dropdown-item>
          </b-nav-item-dropdown>

        <b-navbar-nav>
          <b-link href="/register" class="btn btn-danger">Register</b-link>
          <b-link href="/login" class="btn btn-success">Login</b-link>
        </b-navbar-nav>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

    <hr>
    <h1>{{$t('user info')}}</h1>
    <span><button @click='userLogout()'>{{$t('logout')}}</button></span>
    <span><button @click='userLogoutAll()'>{{$t('logout all')}}</button></span><br>
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
.navbar{
  height: 10%;
}
.navbar-brand {
  position: relative;
}
.navbar.navbar-light.bg-light{
  /* background-color: transparent!important; */
  background: rgba(220, 220, 220, 0.3)!important;
  color: #ff6666!important;
}
</style>
