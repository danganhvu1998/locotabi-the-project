import Vue from 'vue'
import Router from 'vue-router'
import ServerCongifInfo from '@/components/ServerCongifInfo'
import Auth from '@/components/Auth'
import Login from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'
import About from '@/components/About'
import HowTheLocoWorks from '@/components/HowTheLocoWorks'
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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
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
