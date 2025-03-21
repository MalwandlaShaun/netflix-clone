import { useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { auth } = useContext(FirebaseContext); // Get auth from context

  useEffect(() => {
    if (!auth) {
      console.error('Auth is undefined');
      return;
    }

    // Set up the listener
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, [auth]);

  return { user };
}
