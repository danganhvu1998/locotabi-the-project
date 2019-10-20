<template>
  <div class="hello">
    <h1>{{ $t('message') }}</h1>
    <p>Backend: {{ backend }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      backend: process.env.BACKEND_SERVER_ADDRESS
    }
  },
  methods: {
    checkdata () {
      console.log(this.backend)
      console.log('Haha', process.env.BACKEND_SERVER_ADDRESS)
    }
  },
  created () {
    this.checkdata()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
