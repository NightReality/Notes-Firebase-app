import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3Yj0obgrxR2HFsPfUhCJSv6FmTfta-vg",
  authDomain: "blog-app-67f3a.firebaseapp.com",
  projectId: "blog-app-67f3a",
  storageBucket: "blog-app-67f3a.appspot.com",
  messagingSenderId: "432656950365",
  appId: "1:432656950365:web:5c58fa68f48a27eb9ad9b4"
};


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};