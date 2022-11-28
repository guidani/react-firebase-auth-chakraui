import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../hooks/useUserAuth";

export const ProtectedRoute = () => {
  const { user } = useUserAuth();

  if (!user) return <Navigate to="/dashboard" replace />;
  return <Outlet />;
};
