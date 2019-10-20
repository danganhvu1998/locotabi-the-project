import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/ShowServerConfig'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/server_config_info',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

export default router
