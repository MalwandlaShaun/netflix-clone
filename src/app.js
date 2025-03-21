import React from 'react';
import { Router, Link } from '@reach/router'; // Import Reach Router
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export function App() {
  const { user } = useAuthListener();

  return (
    <div>
      {/* Replace Navigation links with Reach Router Links */}
      <nav>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        <Link to={ROUTES.BROWSE}>Browse</Link>
      </nav>

      <Router>
        {/* Set up routes using Reach Router */}
        <IsUserRedirect
          path={ROUTES.SIGN_IN}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          path={ROUTES.SIGN_UP}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute path={ROUTES.BROWSE} user={user}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          path={ROUTES.HOME}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <Home />
        </IsUserRedirect>
      </Router>
    </div>
  );
}
