// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpFyLbrYqfxaGEuQ6NUfa-vvb3vqBaTgQ",
  authDomain: "react-login-ec144.firebaseapp.com",
  projectId: "react-login-ec144",
  storageBucket: "react-login-ec144.firebasestorage.app",
  messagingSenderId: "128656592038",
  appId: "1:128656592038:web:92fb91c1dcae1edd9e3867",
  measurementId: "G-08Q1DWS0ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  

export { auth };