// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "biggest-ecommerce-app.firebaseapp.com",
  databaseURL: "https://ecommerce-225c8.firebaseio.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "biggest-ecommerce-app.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSANGER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 
