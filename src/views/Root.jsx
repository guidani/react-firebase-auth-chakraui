import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const Root = () => {
  return <Outlet />;
};

export const rootLoader = () => {
  return <Navigate to='login' replace={true}/>
}