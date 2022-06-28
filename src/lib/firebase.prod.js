import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBV62-7L4P1JStRj27b3WCeC6X1HCeS7A0',
  authDomain: 'netflix-clone-309f1.firebaseapp.com',
  projectId: 'netflix-clone-309f1',
  storageBucket: 'netflix-clone-309f1.appspot.com',
  messagingSenderId: '1090469972728',
  appId: '1:1090469972728:web:8a2fe2b3ce9377f9b4090d',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
