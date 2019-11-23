import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import VueI18n from 'vue-i18n'
Vue.use(VueCookies, axios, VueAxios, VueI18n)

const state = {
  userId: '',
  username: '',
  email: '',
  language: '',
  self_intro: '',
  currency: '',
  avatar: '',
  token_type: 'Bearer',
  access_token: '',
  refresh_token: ''
}

const getters = {
  userId: state => state.userId,
  username: state => state.username,
  userLanguage: state => state.language,
  email: state => state.email,
  self_intro: state => state.self_intro,
  currency: state => state.currency,
  avatar: state => state.avatar,
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
      data: userInfo
    }
    let res = await dispatch('requestSender', requestData)
    let loginData = {
      username: userInfo.email,
      password: userInfo.password
    }
    if (res.status >= 200 & res.status <= 299) {
      // console.log(res.data)
      dispatch('login', loginData)
    } else {
      let ObjectErrors = JSON.parse(res.response).errors
      console.log('Error', ObjectErrors)
      // Todo: Show error to user if have
    }
  },

  async login ({dispatch}, userInfo) {
    console.log(userInfo)
    let requestData = {
      type: 'post',
      url: '/api/login',
      data: userInfo
    }
    let res = await dispatch('requestSender', requestData)
    if (res.status >= 200 & res.status <= 299) {
      // console.log('LOGIN SUCCESS', res.data)
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
    // Todo: change locale when take user data
    let res = await dispatch('requestSender', requestData)
    if (res.status >= 200 & res.status <= 299) {
      commit('userInfo', res.data)
      console.log(res.data)
    } else console.log('Something wrong when getting user data')
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
  },

  async fetchUserInfo ({commit, dispatch}) {
    let requestData = {
      type: 'get',
      url: '/api/user'
    }
    let res = await dispatch('requestSender', requestData)
    if (res.status >= 200 & res.status <= 299) {
      commit('fetchUserInfo', res.data)
    } else console.log('Something wrong when getting user data')
  },

  async editInfo ({dispatch}, newUserInfo) {
    let requestData = {
      type: 'post',
      url: '/api/edit_info',
      data: newUserInfo
    }
    let res = await dispatch('requestSender', requestData)
    if (res.status >= 200 & res.status <= 299) {
      console.log(res.data)
    } else {
      let ObjectErrors = JSON.parse(res.response).errors
      console.log('Error', ObjectErrors)
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
    state.language = userInfo.language
    state.avatar = userInfo.avatar
  },

  userInfoDelete: (state) => {
    state.token_type = ''
    state.access_token = ''
    state.refresh_token = ''
    state.username = ''
    state.email = ''
  },

  fetchUserInfo: (state, userInfo) => {
    state.userId = userInfo.id
    state.username = userInfo.name
    state.language = userInfo.language
    state.self_intro = userInfo.self_intro
    state.currency = userInfo.currency
  },

  updateUsername: (state, newUsername) => {
    state.username = newUsername
  },

  updateUserLanguage: (state, newUserLanguage) => {
    state.language = newUserLanguage
  },

  updateSelfIntro: (state, newSelfIntro) => {
    state.self_intro = newSelfIntro
  },

  updateCurrency: (state, newCurrency) => {
    state.currency = newCurrency
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
