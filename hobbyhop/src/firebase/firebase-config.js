// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBYrlt_ZzV9aGpowkiySSQrauVp_2qPgAg",
  authDomain: "hobbyhop-fa22a.firebaseapp.com",
  projectId: "hobbyhop-fa22a",
  storageBucket: "hobbyhop-fa22a.appspot.com",
  messagingSenderId: "500601765458",
  appId: "1:500601765458:web:1a1455b26490cb8a66e98b",
  measurementId: "G-LGWRYRGQLD"
};


const app = initializeApp(firebaseConfig);

// This is our database variable
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;