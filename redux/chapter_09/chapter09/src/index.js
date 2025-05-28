import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCG3iCXp4_GKZGXarBycDxxFsqdKHaTN0",
  authDomain: "crud-project-18b49.firebaseapp.com",
  projectId: "crud-project-18b49",
  storageBucket: "crud-project-18b49.firebasestorage.app",
  messagingSenderId: "805799259675",
  appId: "1:805799259675:web:dc08578ac5dc10b6e412be",
  measurementId: "G-5QDHNFJVNF"
};

firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
