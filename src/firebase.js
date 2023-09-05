// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfPNqTAoThNhN3qhlB-FGVhgAQE_TZoZo",
    authDomain: "clone-a8f92.firebaseapp.com",
    projectId: "clone-a8f92",
    storageBucket: "clone-a8f92.appspot.com",
    messagingSenderId: "647815941408",
    appId: "1:647815941408:web:d011ef89bcfe9f241adb45",
    measurementId: "G-3RBHMLBZ4C"
  };

  // Use this to initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  export const db = firebaseApp.firestore();
  export const auth = firebase.auth();

  