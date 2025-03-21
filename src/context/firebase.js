import { createContext } from 'react';
import { auth } from "../lib/firebase.prod";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};