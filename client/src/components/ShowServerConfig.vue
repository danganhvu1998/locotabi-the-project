<template>
  <div class="hello">
    <h1>Current Config</h1>
    <p>Backend: <b>{{ backend }}</b></p>
    <p>Language: <b>{{ language }}</b></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
