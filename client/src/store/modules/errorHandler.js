// import Vue from 'vue'
// Vue.use()

const actions = {
  standardError (error) {
    console.log('Error', error)
    let ObjectErrors = JSON.parse(error).errors
    return ObjectErrors
  }
}

export default {
  actions
}
