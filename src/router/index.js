import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Error404 from '@/components/Error404'
import HelloWorld from '@/components/HelloWorld'
import Game from '@/components/Game'

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
    }
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
          path: '/superJeu',
          name: 'superJeu',
          component: Game
      }
  ]
})
