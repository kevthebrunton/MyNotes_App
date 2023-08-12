// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSRXxtt0GwIQigXx8oKBznqWyNVF3IY3o",
  authDomain: "mynotes-cfdd1.firebaseapp.com",
  projectId: "mynotes-cfdd1",
  storageBucket: "mynotes-cfdd1.appspot.com",
  messagingSenderId: "1032281913491",
  appId: "1:1032281913491:web:64dfb131005c6c29a27566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);