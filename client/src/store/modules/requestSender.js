import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import AuthModule from './auth'
Vue.use(VueCookies, axios, VueAxios)

const actions = {
  authHeaderMaker () {
    let authToken = ''
    if (AuthModule.state.access_token === '') {
      let authInfo = VueCookies.get('authInfo')
      authToken = authInfo.token_type + ' ' + authInfo.access_token
    } else {
      authToken = AuthModule.state.token_type + ' ' + AuthModule.state.access_token
    }
    let headers = {
      Accept: 'application/json',
      Authorization: authToken
    }
    return headers
  },

  async requestSender ({dispatch}, requestData) {
    let url = process.env.BACKEND_SERVER_ADDRESS + requestData.url
    let headers = await dispatch('authHeaderMaker')
    try {
      let res = await axios({
        headers: headers,
        method: requestData.type,
        url: url,
        data: requestData.data
      })
      return res
    } catch (error) {
      return error.request
    }
  }
}

export default {
  actions
}
