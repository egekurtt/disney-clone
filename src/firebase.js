import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB88_0-QGVsLrHjN00lqkJIljidVT5hQTs",
    authDomain: "disney-clone-a6c8d.firebaseapp.com",
    projectId: "disney-clone-a6c8d",
    storageBucket: "disney-clone-a6c8d.appspot.com",
    messagingSenderId: "318207964055",
    appId: "1:318207964055:web:58c8d6743ff51a84384ad2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;
