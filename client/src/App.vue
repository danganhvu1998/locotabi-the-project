<template>
  <div id="app">
    <Navbar/>
    <UserInfo/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/FixedTab/Navbar.vue'
import Footer from './components/FixedTab/Footer.vue'
import UserInfo from './components/Auth/UserInfo'

export default {
  name: 'App',
  components: {
    Navbar,
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
