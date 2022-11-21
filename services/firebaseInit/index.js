// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFh8aHS62xDORPtYHt75GSIQtIfBASbKg",
  authDomain: "fitiavana-website.firebaseapp.com",
  projectId: "fitiavana-website",
  storageBucket: "fitiavana-website.appspot.com",
  messagingSenderId: "327000185750",
  appId: "1:327000185750:web:672b8b226f942c15ff5bb7",
  measurementId: "G-2ZSK3L25Q8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);