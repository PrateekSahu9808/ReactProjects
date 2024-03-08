// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq2kIh3nw2_DblbeGbiwtbQpbwyImFN50",
  authDomain: "netflixgpt-e2889.firebaseapp.com",
  projectId: "netflixgpt-e2889",
  storageBucket: "netflixgpt-e2889.appspot.com",
  messagingSenderId: "941569456383",
  appId: "1:941569456383:web:37946cf7b4f64f051c34ca",
  measurementId: "G-7BL8987CG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();