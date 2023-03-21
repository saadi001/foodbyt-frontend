// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0puy2PHg4cZ9qsFsC99BY4ItfVou0rsU",
  authDomain: "foodbyt-e8de6.firebaseapp.com",
  projectId: "foodbyt-e8de6",
  storageBucket: "foodbyt-e8de6.appspot.com",
  messagingSenderId: "958796079637",
  appId: "1:958796079637:web:bfc463043a0a302acfa41c",
  measurementId: "G-2WX2FE7F3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;