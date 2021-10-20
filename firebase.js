// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiuwcYwHepa3rd0lqmdf52DUf39B99n50",
  authDomain: "insta-2-0.firebaseapp.com",
  projectId: "insta-2-0",
  storageBucket: "insta-2-0.appspot.com",
  messagingSenderId: "852454821326",
  appId: "1:852454821326:web:3c0f3012f5e9877ba0ef9f",
  measurementId: "G-ZK7ZC6R984"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()


export {app, db, storage}