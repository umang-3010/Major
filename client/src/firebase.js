// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "blog-7c527.firebaseapp.com",
  projectId: "blog-7c527",
  storageBucket: "blog-7c527.appspot.com",
  messagingSenderId: "578817624575",
  appId: "1:578817624575:web:43fa40ddfa09b0c5b5bfca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
