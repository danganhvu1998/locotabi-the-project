<template>
  <div>
    <UserInfo />
    <Login />
    <Register />
  </div>
</template>

<script>
import Register from './Register'
import Login from './Login'
import UserInfo from './UserInfo'
export default {
  name: 'Auth',
  components: {
    Register,
    Login,
    UserInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
