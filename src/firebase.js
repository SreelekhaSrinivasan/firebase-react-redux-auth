import firebase from 'firebase';
require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyBYGYC5f21yQ3OHTgoUvT2gDQJth9YeL7k",
    authDomain: "auth-redux-b53f6.firebaseapp.com",
    projectId: "auth-redux-b53f6",
    storageBucket: "auth-redux-b53f6.appspot.com",
    messagingSenderId: "147261272525",
    appId: "1:147261272525:web:98571bf9e5c9d41e9ad484"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  var provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }