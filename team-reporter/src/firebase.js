// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAejMpzlbOcQthMIWFHLj2_CoEOexLIHm8",
  authDomain: "test-auth-28e87.firebaseapp.com",
  projectId: "test-auth-28e87",
  storageBucket: "test-auth-28e87.appspot.com",
  messagingSenderId: "217063452220",
  appId: "1:217063452220:web:7a4c13fa365414c6571d39",
  measurementId: "G-V5FEMEGJHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;