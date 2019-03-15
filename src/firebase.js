import firebase from 'firebase/app';
import 'firebase/app' 
import 'firebase/database'

const config = {
    apiKey: "AIzaSyBQ0S9FfMFO28Rncd2QvwQDZQt9XwL-PWc",
    authDomain: "m-city-9d2db.firebaseapp.com",
    databaseURL: "https://m-city-9d2db.firebaseio.com",
    projectId: "m-city-9d2db",
    storageBucket: "m-city-9d2db.appspot.com",
    messagingSenderId: "361755469832"
  };
  firebase.initializeApp(config);
  const firebaseDB=firebase.database();
  firebaseDB.ref('matches').once('value').then((snapshort)=>{
    console.log(snapshort);
  });
