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
  async register ({dispatch}, userInfo) {
    let requestData = {
      type: 'post',
      url: '/api/register',
      data: {
        email: userInfo.email,
        name: userInfo.name,
        password: userInfo.password
      }
    }
    let res = await dispatch('requestSender', requestData)
    if (res.status >= 200 & res.status <= 299) dispatch('login', userInfo)
    else {
      let ObjectErrors = JSON.parse(res.response).errors
      console.log('Error', ObjectErrors)
      // Todo: Show error to user if have
    }
  },

  async login ({dispatch}, userInfo) {
    let requestData = {
      type: 'post',
      url: '/api/login',
      data: {
        username: userInfo.email,
        password: userInfo.password
      }
    }
    let res = await dispatch('requestSender', requestData)
    if (res.status >= 200 & res.status <= 299) {
      console.log('LOGIN SUCCESS', res.data)
      let authInfo = {
        token_type: res.data.token_type,
        access_token: res.data.access_token,
        refresh_token: res.data.refresh_token
      }
      VueCookies.set('authInfo', authInfo, '365D')
      dispatch('userInfo')
    } else {
      let error = JSON.parse(res.response).message
      console.log('Error', error)
      // Todo: Show error to user if have
    }
  },

  async userInfo ({commit, dispatch}) {
    let requestData = {
      type: 'get',
      url: '/api/user'
    }
    let res = await dispatch('requestSender', requestData)
    if (res.status >= 200 & res.status <= 299) commit('userInfo', res.data)
    else console.log('Something wrong when getting user data')
  },

  async userLogout ({commit, dispatch}) {
    let requestData = {
      type: 'post',
      url: '/api/logout_current',
      data: null
    }
    let res = await dispatch('requestSender', requestData)
    if (res.status >= 200 & res.status <= 299) {
      console.log('User Infomation', res.data)
      commit('userInfoDelete')
    } else {
      console.log('Something wrong when logging out')
    }
  },

  async userLogoutAll ({commit, dispatch}) {
    let requestData = {
      type: 'post',
      url: '/api/logout_all',
      data: null
    }
    let res = await dispatch('requestSender', requestData)
    if (res.status >= 200 & res.status <= 299) {
      console.log('User Infomation', res.data)
      commit('userInfoDelete')
    } else {
      console.log('Something wrong when logging out')
    }
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
