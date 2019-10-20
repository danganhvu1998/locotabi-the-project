import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies, axios, VueAxios)

const state = {
  username: '',
  email: '',
  token_type: 'Bearer',
  access_token: '',
  refresh_token: ''
}

const getters = {
  username: state => state.username,
  email: state => state.email,
  token_type: state => state.token_type,
  access_token: state => state.access_token,
  refresh_token: state => state.refresh_token,
  token: state => state.token_type + ' ' + state.access_token
}

const actions = {
  // eslint-disable-next-line
  register ({dispatch}, userInfo) {
    axios.post(
      'http://localhost:9000/api/register', {
        'email': userInfo.email,
        'name': userInfo.name,
        'password': userInfo.password
      })
      .then(response => {
        console.log(response.data)
        // dispatch('login', userInfo)
      })
      .catch(error => {
        console.log(error.response.data.errors)
      })
  }
}

const mutations = {
  tokenInfo: (state, tokenInfo) => {
    state.token_type = tokenInfo.token_type
    state.access_token = tokenInfo.access_token
    state.refresh_token = tokenInfo.refresh_token
  },

  userInfo: (state, userInfo) => {
    state.username = userInfo.name
    state.email = userInfo.email
  },

  userInfoDelete: (state) => {
    state.token_type = ''
    state.access_token = ''
    state.refresh_token = ''
    state.username = ''
    state.email = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
