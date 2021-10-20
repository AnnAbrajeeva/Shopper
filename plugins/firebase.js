import firebase from 'firebase/app';
import { initializeApp, getApps } from "firebase/app"
import 'firebase/auth'
import { getStorage } from "firebase/storage";
import 'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyAoNYrTio0PFuV1N_Q9A2NoIJRIk57wQB8",
  authDomain: "shopper-4eb43.firebaseapp.com",
  databaseURL: "https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shopper-4eb43",
  storageBucket: "shopper-4eb43.appspot.com",
  messagingSenderId: "1004928916174",
  appId: "1:1004928916174:web:2b6c9e3ec41d73e08b4e9f"
}

let app = null

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : '' 

export const auth = firebase.auth()
export const DB = firebase.database()
export const storage = firebase.storage();
export default firebase
