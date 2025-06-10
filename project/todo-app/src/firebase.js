// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCN4LAuAVyDw821gIZnqeZwkUMIdnebWM",
  authDomain: "crud-proj-3c08a.firebaseapp.com",
  projectId: "crud-proj-3c08a",
  storageBucket: "crud-proj-3c08a.firebasestorage.app",
  messagingSenderId: "400227155718",
  appId: "1:400227155718:web:d17ad89b3d3d6081236887",
  measurementId: "G-GLG33DHR97"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
