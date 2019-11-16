import Vuex from 'vuex'
import Vue from 'vue'
import auth from './modules/auth'
import requestSender from './modules/requestSender'
import errorHandler from './modules/errorHandler'
import feedback from './modules/feedback'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    requestSender,
    errorHandler,
    feedback
  }
})
