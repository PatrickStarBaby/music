import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import music from '@/components/music'
import register from '@/components/register'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
