import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, role }) {
  const userRole = localStorage.getItem('role');

  // Not logged in
  if (!userRole) {
    return <Navigate to="/" replace />;
  }

  // Role mismatch
  if (role && userRole !== role) {
    return <Navigate to="/" replace />;
  }

  // Allow render
  return children;
}

export default ProtectedRoute;