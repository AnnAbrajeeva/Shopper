// firebase.js
import * as firebase from "firebase/app"
import "firebase/auth";
import "firebase/database";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAoNYrTio0PFuV1N_Q9A2NoIJRIk57wQB8",
    authDomain: "shopper-4eb43.firebaseapp.com",
    projectId: "shopper-4eb43",
    storageBucket: "shopper-4eb43.appspot.com",
    messagingSenderId: "1004928916174",
    appId: "1:1004928916174:web:2b6c9e3ec41d73e08b4e9f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);