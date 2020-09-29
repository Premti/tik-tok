import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBQq2uFoSesFvNVeLq-0BImQ8-QSJeIkCw",
    authDomain: "tik-tok-sim-abda0.firebaseapp.com",
    databaseURL: "https://tik-tok-sim-abda0.firebaseio.com",
    projectId: "tik-tok-sim-abda0",
    storageBucket: "tik-tok-sim-abda0.appspot.com",
    messagingSenderId: "480339428102",
    appId: "1:480339428102:web:203730b07e81ef50369487",
    measurementId: "G-1C217RSYDB"
  };

  const firebaseApp = 
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;