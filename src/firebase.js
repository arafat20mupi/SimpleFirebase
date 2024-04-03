// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtr4a1XzsdWpvNwJ29QZMyZlSal6tjJGQ",
  authDomain: "simple-firebase-2-d853c.firebaseapp.com",
  projectId: "simple-firebase-2-d853c",
  storageBucket: "simple-firebase-2-d853c.appspot.com",
  messagingSenderId: "320353757908",
  appId: "1:320353757908:web:7bbc54e74281c1d174e941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth