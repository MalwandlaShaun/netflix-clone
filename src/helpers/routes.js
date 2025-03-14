import React from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate for redirects

export function IsUserRedirect({ user, loggedInPath, children }) {
  if (user) {
    return <Navigate to={loggedInPath} />;
  }

  return children;
}

export function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}
