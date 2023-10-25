// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "thoughtcrafts-53a39.firebaseapp.com",
  projectId: "thoughtcrafts-53a39",
  storageBucket: "thoughtcrafts-53a39.appspot.com",
  messagingSenderId: "253906160381",
  appId: "1:253906160381:web:7edea826c898a4715d0c94"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);