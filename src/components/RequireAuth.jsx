import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../hooks/useUserAuth";

export const RequireAuth = ({ children }) => {
  const { user } = useUserAuth();

  if (!user) return <Navigate to="/" replace />;
  return children;
};
