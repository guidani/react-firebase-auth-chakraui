import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUserAuth } from "../hooks/useUserAuth";
import { Navbar } from "./Navbar";

export const RequireAuth = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) return <Navigate to="/" replace />;
  
  return (
    <>
      <Navbar handleLogOut={handleLogOut} user={user} />
      <Outlet />
    </>
  );
};
