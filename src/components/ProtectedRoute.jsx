import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../hooks/useUserAuth";

export const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  if (!user) return <Navigate to="/dashboard" replace />;
  return children;
};
