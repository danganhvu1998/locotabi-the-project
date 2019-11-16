<template>
  <div>
    <h1>Edit Information</h1><br>
    <div>
      <form>
        <label for="username">{{$t('user')}}: </label>
        <input type="text" v-model='username'><br>
        <label for="language">{{$t('language')}}: </label>
        <input type="text" v-model='language'><br>
        <label for="password">{{$t('password')}}: </label>
        <input type="text" v-model='password'><br>
        <label for="self_intro">{{$t('self intro')}}: </label>
        <textarea v-model="self_intro" cols="30" rows="10"></textarea><br>
        <label for="currency">{{$t('currency')}}: </label>
        <input type="text" v-model='currency'><br>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditInfo',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
label {
  vertical-align: top;
  display: inline-block;
}
</style>
