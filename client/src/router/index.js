import Vue from 'vue'
import Router from 'vue-router'
import ServerCongifInfo from '@/components/ServerCongifInfo'
import Auth from '@/components/AuthTest'
import About from '@/components/About'
import HowTheLocoWorks from '@/components/HowTheLocoWorks'

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
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/how-the-loco-works',
      name: 'HowTheLocoWorks',
      component: HowTheLocoWorks
    }
  ]
})

export default router
