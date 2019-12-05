// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import firebase from 'firebase'
// import 'firebase/firestore'
import { auth } from './firebase'


Vue.config.productionTip = false

let app = ''

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyCf4cjxcWSIBQ7niUYI9r9Qky1bjTVb_PM',
//   authDomain: 'polycaf-b667a.firebaseapp.com',
//   databaseURL: 'https://polycaf-b667a.firebaseio.com',
//   projectId: 'polycaf-b667a',
//   storageBucket: 'polycaf-b667a.appspot.com',
//   messagingSenderId: '61854012626',
//   appId: '1:61854012626:web:1b4f48c7943337d52c490b'
// }

// Initialize Firebase
// firebase.initializeApp(firebaseConfig)

// export const db = firebase.firestore()

auth.onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    }).$mount('#app')
  }
})
