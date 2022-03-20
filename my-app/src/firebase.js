import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAelDvJy6cZ88kAl_I6sP-U1d4p7CXMiyo",
  authDomain: "twitter-clone-f0ab1.firebaseapp.com",
  projectId: "twitter-clone-f0ab1",
  storageBucket: "twitter-clone-f0ab1.appspot.com",
  messagingSenderId: "339168683006",
  appId: "1:339168683006:web:7ea1aa32c1ea5f80ed96af",
  measurementId: "G-C0GGQZC578"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
export default db; 