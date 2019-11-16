import Vue from 'vue'
import Router from 'vue-router'
import ServerCongifInfo from '@/components/ServerCongifInfo'
import Auth from '@/components/AuthTest'
import EditInfo from '@/components/EditInfo'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/test/server_config_info',
      name: 'ServerCongifInfo',
      component: ServerCongifInfo
    },
    {
      path: '/test/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/test/auth/edit_info',
      name: 'EditInfo',
      component: EditInfo
    }
  ]
})

export default router
