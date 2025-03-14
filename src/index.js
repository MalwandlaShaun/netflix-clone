import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Import from 'react-dom/client'
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { app, auth, db } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ Use createRoot
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: { auth, app, db } }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
