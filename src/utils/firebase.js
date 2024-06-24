// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjHwWMPdWYgkPgQwq8PNBJS7UJovxiKuA",
  authDomain: "foodpoint-99ef0.firebaseapp.com",
  projectId: "foodpoint-99ef0",
  storageBucket: "foodpoint-99ef0.appspot.com",
  messagingSenderId: "792203534856",
  appId: "1:792203534856:web:c0779496f64caf4f7da7bd",
  measurementId: "G-B5RWM8EKJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
