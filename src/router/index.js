import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Index from '@/components/Index'
import Game from '@/components/Game'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '*',
      name: 'Error404',
      component: Game
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  // else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router
