import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk-AkgEvm5Q_ZOiS2v5CwsBEm8HBZMLhE",
  authDomain: "login-4175e.firebaseapp.com",
  projectId: "login-4175e",
  storageBucket: "login-4175e.firebasestorage.app",
  messagingSenderId: "724082382085",
  appId: "1:724082382085:web:267976084ea1d14d92936c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')