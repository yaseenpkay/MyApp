import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyBW1-CE9Jw5sGvt5hIyWPr_jzkGXciwFuo',
  authDomain: 'myapp-b0476.firebaseapp.com',
  projectId: 'myapp-b0476',
  storageBucket: 'myapp-b0476.appspot.com',
  appId: '1:405530709150:android:6597fcf48d91899b863f8f',
  messagingSenderId: '405530709150',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = getFirestore(app);


export default firebase;