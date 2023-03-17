import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/devStatus'
    },
    {
      path:'/devStatus',
      component: () => import('../components/main/devStatus.vue')
    },
    {
      path:'/IfStatus',
      component: () => import('../components/main/IfStatus.vue')
    }
  ]
})
