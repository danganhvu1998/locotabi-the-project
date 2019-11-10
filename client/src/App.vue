<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>1 - 3</b-col>
        <b-col>2 - 3</b-col>
        <b-col>3 - 3</b-col>
      </b-row>
    </b-container>
    <nav>Nav Here</nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
