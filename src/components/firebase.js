// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO_Rc8oBw92zNRMDu_Dai1lCWyyhNCAzE",
  authDomain: "login-auth-59fee.firebaseapp.com",
  projectId: "login-auth-59fee",
  storageBucket: "login-auth-59fee.appspot.com",
  messagingSenderId: "293875837796",
  appId: "1:293875837796:web:9b4d8092ee4793847be871",
  measurementId: "G-PXD00G6S7E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
