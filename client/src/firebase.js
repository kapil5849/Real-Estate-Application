// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-94a7a.firebaseapp.com",
  projectId: "mern-stack-94a7a",
  storageBucket: "mern-stack-94a7a.appspot.com",
  messagingSenderId: "361176989849",
  appId: "1:361176989849:web:dc7c53d6f0840c9251b808"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };