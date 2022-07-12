import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfssoOHj_N01iU6jpMTwmL82M4c4N47Xs",
    authDomain: "newscafe-7e3b7.firebaseapp.com",
    projectId: "newscafe-7e3b7",
    storageBucket: "newscafe-7e3b7.appspot.com",
    messagingSenderId: "24408644255",
    appId: "1:24408644255:web:e4a13b185b4e82e4d8a0aa"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();

const auth= firebase.auth();


export { db, auth }