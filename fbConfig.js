import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  var config = {
    apiKey: "AIzaSyA1UuvThvAUXET0dCJ5QKQLwzLijQgHSsg",
    authDomain: "jps-streamer-app.firebaseapp.com",
    databaseURL: "https://jps-streamer-app.firebaseio.com",
    projectId: "jps-streamer-app",
    storageBucket: "jps-streamer-app.appspot.com",
    messagingSenderId: "908018871145"
  };



  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})


  export default firebase;