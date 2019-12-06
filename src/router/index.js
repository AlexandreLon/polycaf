import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Index from '@/components/Index'
import Error404 from '@/components/Error404'
import Formulaire from '@/components/Formulaire'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/formulaire',
      name: 'formulaire',
      component: Formulaire
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      name: 'Error404',
      component: Error404
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
