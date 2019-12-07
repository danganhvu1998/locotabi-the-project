<template>
  <div id="app">
    <UserInfo/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/FixedTab/Footer.vue'
import UserInfo from './components/Auth/UserInfo'

export default {
  name: 'App',
  components: {
    Footer,
    UserInfo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
