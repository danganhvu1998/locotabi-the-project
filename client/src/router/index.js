import Vue from 'vue'
import Router from 'vue-router'
import ServerCongifInfo from '@/components/ServerCongifInfo'
import Auth from '@/components/Auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/server_config_info',
      name: 'ServerCongifInfo',
      component: ServerCongifInfo
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    }
  ]
})

export default router
