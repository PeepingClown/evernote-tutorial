import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCtlrzJiVH-eos2DIupWMuTo0Q1NwYeZHU",
  authDomain: "evernote-clone-f55d3.firebaseapp.com",
  databaseURL: "https://evernote-clone-f55d3.firebaseio.com",
  projectId: "evernote-clone-f55d3",
  storageBucket: "evernote-clone-f55d3.appspot.com",
  messagingSenderId: "978782322815",
  appId: "1:978782322815:web:0b84f1cdc57e2f785d3f4a",
  measurementId: "G-TTFQ9MGNDP"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById('evernote-container'));

