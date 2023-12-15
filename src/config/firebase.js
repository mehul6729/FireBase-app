// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxGmVcbvZYMUvKRBR9mUW18SeJ4QvE2kQ",
  authDomain: "vite-contact-6e40b.firebaseapp.com",
  projectId: "vite-contact-6e40b",
  storageBucket: "vite-contact-6e40b.appspot.com",
  messagingSenderId: "523340416582",
  appId: "1:523340416582:web:683ab664ed22d8a56aac47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);