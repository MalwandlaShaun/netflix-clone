// Firebase v9+ modular imports
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDiWaaDfkT1PFiCzcwQ7bXu1ydOmczy02Y",
  authDomain: "malwandla-netflix.firebaseapp.com",
  projectId: "malwandla-netflix",
  storageBucket: "malwandla-netflix.firebasestorage.app",
  messagingSenderId: "705413500715",
  appId: "1:705413500715:web:b5f36eb351d818619b3f6e"
};
// Initialize Firebase app
const app = initializeApp(config);

// Get services
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
