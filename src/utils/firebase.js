// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdg2iUtZjGgx8IJ8t4FqOq0-d7BCsfchQ",
  authDomain: "netflixgpt-ea60c.firebaseapp.com",
  projectId: "netflixgpt-ea60c",
  storageBucket: "netflixgpt-ea60c.appspot.com",
  messagingSenderId: "314689573148",
  appId: "1:314689573148:web:a4e9f71f4acc761b89aad9",
  measurementId: "G-8503M00XLN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
