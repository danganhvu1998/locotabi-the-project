<template>
  <div>
    <form @submit="onSend">
      <textarea v-model="message" cols="30" rows="10" placeholder="Do you have any feedback for us? Let us know here!"></textarea>
      <br>
      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Feedback',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    ...mapActions(['sendFeedback']),
    onSend (e) {
      e.preventDefault()
      let feedback = {
        message: this.message
      }
      this.sendFeedback(feedback)
    }
  }
}
</script>

<style>

</style>
