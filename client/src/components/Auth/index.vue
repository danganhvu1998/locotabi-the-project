<template>
  <div>
    <Login />
    <Register />
  </div>
</template>

<script>
import Register from './Register'
import Login from './Login'
export default {
  name: 'Auth',
  components: {
    Register,
    Login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
