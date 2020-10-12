import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCvOPKZCqcAsYjR-YJGuGViNXTzZo40n64",
    authDomain: "authentication-b3f95.firebaseapp.com",
    databaseURL: "https://authentication-b3f95.firebaseio.com",
    projectId: "authentication-b3f95",
    storageBucket: "authentication-b3f95.appspot.com",
    messagingSenderId: "142261140261",
    appId: "1:142261140261:web:7b2aa5f3c6f16d6d7c38cc",
    measurementId: "G-01R93JG83F"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default fire;
