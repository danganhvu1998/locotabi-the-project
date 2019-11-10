// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import Vue from 'vue'

const state = {
  message: ''
}

const getters = {
  message: state => state.message
}

const actions = {
  async sendFeedback ({dispatch}, feedback) {
    console.log(localStorage.getItem['token'])
    let requestData = {
      type: 'post',
      url: '/api/feedback',
      data: feedback
    }
    let res = await dispatch('requestSender', requestData)
    if (res.status >= 200 & res.status <= 299) {
      // console.log(res.data)
      alert('Your message is sent successfully!')
    } else {
      let ObjectErrors = JSON.parse(res.response).errors
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
