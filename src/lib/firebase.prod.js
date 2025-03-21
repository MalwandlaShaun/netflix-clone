// Firebase v9+ modular imports
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDiWaaDfkT1PFiCzcwQ7bXu1ydOmczy02Y',
  authDomain: 'malwandla-netflix.firebaseapp.com',
  projectId: 'malwandla-netflix',
  storageBucket: 'malwandla-netflix.firebasestorage.app',
  messagingSenderId: '705413500715',
  appId: '1:705413500715:web:b5f36eb351d818619b3f6e',
};
// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get services
const auth = getAuth(app);
const db = getFirestore(app);

// Sign up function
export const signupWithEmail = (email, password, firstName) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (result) => {
      return updateProfile(result.user, {
        displayName: firstName,
        photoURL: Math.floor(Math.random() * 5) + 1, // Random photo URL as a placeholder
      });
    }
  );
};
export { app, auth, db };
