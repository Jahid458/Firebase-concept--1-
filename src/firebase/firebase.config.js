// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB65iAF_gwg9kllOH6snsTV0jHBVSfV6_0",
  authDomain: "concept-1-c0ee2.firebaseapp.com",
  projectId: "concept-1-c0ee2",
  storageBucket: "concept-1-c0ee2.firebasestorage.app",
  messagingSenderId: "404855707117",
  appId: "1:404855707117:web:4c46f745c6f7db40f083e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export  default auth;