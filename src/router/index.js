import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Error404 from '@/components/Error404'
import Secret from '@/components/Secret'
import SecretReward from '@/components/SecretReward'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '*',
      name: 'Error404',
      component: Error404
    },
    {
      path: '/secret',
      name: 'Secret',
      component: Secret
    },
    {
      path: '/secretsuccess',
      name: 'SecretSuccess',
      component: SecretReward
    }
  ]
})
