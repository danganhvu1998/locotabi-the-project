<template>
  <div>
    <Register />
  </div>
</template>

<script>
import Register from './Register'
export default {
  name: 'Auth',
  components: {
    Register
  },
  data () {
    return {
      backend: process.env.BACKEND_SERVER_ADDRESS,
      language: process.env.VUE_APP_I18N_LOCALE
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
