import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState('null');

  if (!user) return <Navigate to='/dashboard' replace/>;
  return children;
};
