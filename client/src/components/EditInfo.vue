<template>
  <div>
    <h1>{{$t('edit info')}}</h1><br>
    <div>
      <form @submit="onSend($event, 'username')">
        <label for="username">{{$t('user')}}: </label>
        <input type="text" v-model='username'><br>
        <input type="submit" value="Update">
      </form>
      <form @submit="onSend($event, 'language')">
        <label for="language">{{$t('language')}}: </label>
        <input type="text" v-model='userLanguage'><br>
        <input type="submit" value="Update">
      </form>
      <form @submit="onSend($event, 'password')">
        <label for="current_password">{{$t('current password')}}: </label>
        <input type="password" v-model='current_password'><br>
        <label for="new_password">{{$t('new password')}}: </label>
        <input type="password" v-model='new_password'><br>
        <label for="confirm_new_password">{{$t('confirm new password')}}: </label>
        <input type="password" v-model='confirm_new_password'><br>
        <input type="submit" value="Update">
      </form>
      <form @submit="onSend($event, 'self_intro')">
        <label for="self_intro">{{$t('self intro')}}: </label>
        <textarea v-model="self_intro" cols="30" rows="10"></textarea><br>
        <input type="submit" value="Update">
      </form>
       <form @submit="onSend($event, 'currency')">
        <label for="currency">{{$t('currency')}}: </label>
        <input type="text" v-model='currency'><br>
        <input type="submit" value="Update">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'EditInfo',
  computed: {
    username: {
      get () {
        return this.$store.getters.username
      },
      set (newUsername) {
        this.$store.commit('updateUsername', newUsername)
      }
    },
    userLanguage: {
      get () {
        return this.$store.getters.userLanguage
      },
      set (newUserLanguage) {
        this.$store.commit('updateUserLanguage', newUserLanguage)
      }
    },
    self_intro: {
      get () {
        return this.$store.getters.self_intro
      },
      set (newSelfIntro) {
        this.$store.commit('updateSelfIntro', newSelfIntro)
      }
    },
    currency: {
      get () {
        return this.$store.getters.currency
      },
      set (newCurrency) {
        this.$store.commit('updateCurrency', newCurrency)
      }
    }
  },
  methods: {
    ...mapActions(['fetchUserInfo', 'editInfo']),
    onSend (e, fieldChange) {
      e.preventDefault()
      let newUserInfo = {
        fieldChange: fieldChange,
        userId: this.$store.getters.userId,
        name: this.username,
        language: this.userLanguage,
        current_password: this.current_password,
        new_password: this.new_password,
        confirm_new_password: this.confirm_new_password,
        self_intro: this.self_intro,
        currency: this.currency
      }
      this.editInfo(newUserInfo)
    }
  },
  data () {
    return {
      current_password: '',
      new_password: '',
      confirm_new_password: ''
    }
  },
  created () {
    this.fetchUserInfo()
  }
}
</script>

<style scoped>
label {
  vertical-align: top;
  display: inline-block;
}
</style>
