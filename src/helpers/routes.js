import React from 'react';
import { Redirect } from '@reach/router'; // Use Redirect from Reach Router

export function IsUserRedirect({ user, loggedInPath, children }) {
  if (user) {
    return <Redirect to={loggedInPath} />;
  }

  return children;
}

export function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Redirect to="/signin" />;
  }

  return children;
}
