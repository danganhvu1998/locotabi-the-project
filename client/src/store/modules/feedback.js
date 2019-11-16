// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import Vue from 'vue'
import AuthModule from './auth'

const state = {
  message: ''
}

const getters = {
  message: state => state.message
}

const actions = {
  async sendFeedback ({dispatch}, feedback) {
    let requestData = {
      type: 'post',
      url: AuthModule.state.username ? '/api/feedback/user' : '/api/feedback/anonymous',
      data: feedback
    }
    let res = await dispatch('requestSender', requestData)
    if (res.status >= 200 & res.status <= 299) {
      alert('Your message is sent successfully!')
    } else {
      let ObjectErrors = JSON.parse(res.response)
      console.log('Error', ObjectErrors)
      // Todo: Show error to user if have
    }
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
