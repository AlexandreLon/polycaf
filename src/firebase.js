import firebase from 'firebase'
require('firebase/auth')
require('firebase/firestore')

const firebaseConfig = {
    apiKey: 'AIzaSyCf4cjxcWSIBQ7niUYI9r9Qky1bjTVb_PM',
    authDomain: 'polycaf-b667a.firebaseapp.com',
    databaseURL: 'https://polycaf-b667a.firebaseio.com',
    projectId: 'polycaf-b667a',
    storageBucket: 'polycaf-b667a.appspot.com',
    messagingSenderId: '61854012626',
    appId: '1:61854012626:web:1b4f48c7943337d52c490b'
}
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()

export const auth = firebase.auth()

export default firebase
