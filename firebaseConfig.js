// import firebase from 'firebase/compat/app';
// // import { initializeApp } from 'firebase/app';


// // import  { initializeApp, applicationDefault, cert } from 'firebase-admin/app'
// // import { getFirestore, Timestamp, FieldValue, Filter } from 'firebase/firestore'

// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

// // import 'firebase/compat/auth';
// // import 'firebase/compat/firestore';


// const firebaseConfig = {
//   apiKey: "AIzaSyBdmaIsCpnZysYAORP4i1hCswRXTuXhluw",
//   authDomain: 'wisewallet-536d5.firebaseapp.com',
//   projectId: 'wisewallet-536d5',
//   storageBucket: 'wisewallet-536d5.appspot.com',
//   appId: '1:366647077149:android:4a9f3afd95e83b979659f4',
//   messagingSenderId: '366647077149',
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const app = initializeApp(firebaseConfig);

// // const db = getFirestore(app);


// // export default app;

// module.exports = app;

// import firebase from 'firebase/compat/app';

// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyBdmaIsCpnZysYAORP4i1hCswRXTuXhluw",
//   authDomain: 'wisewallet-536d5.firebaseapp.com',
//   projectId: 'wisewallet-536d5',
//   storageBucket: 'wisewallet-536d5.appspot.com',
//   appId: '1:366647077149:android:4a9f3afd95e83b979659f4',
//   messagingSenderId: '366647077149',
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export default firebase

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBdmaIsCpnZysYAORP4i1hCswRXTuXhluw",
  authDomain: 'wisewallet-536d5.firebaseapp.com',
  projectId: 'wisewallet-536d5',
  storageBucket: 'wisewallet-536d5.appspot.com',
  appId: '1:366647077149:android:4a9f3afd95e83b979659f4',
  messagingSenderId: '366647077149',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

export default app






