import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBnbefulsXMpv-XjX1WnQI939QRQA9_WMA",
    authDomain: "zimm-324d4.firebaseapp.com",
    databaseURL: "https://zimm-324d4.firebaseio.com",
    projectId: "zimm-324d4",
    storageBucket: "zimm-324d4.appspot.com",
    messagingSenderId: "352048578406",
    appId: "1:352048578406:web:984ccd52087d8fd5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

//   db.settings({timestampsInSnapshots: true});

  export default db;