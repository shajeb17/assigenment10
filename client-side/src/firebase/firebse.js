// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg4akzDZh70un3T_YDDHm_OM7JWNB5uG8",
  authDomain: "fir-b7402.firebaseapp.com",
  projectId: "fir-b7402",
  storageBucket: "fir-b7402.firebasestorage.app",
  messagingSenderId: "584802304541",
  appId: "1:584802304541:web:c564660946f35d04257cf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);