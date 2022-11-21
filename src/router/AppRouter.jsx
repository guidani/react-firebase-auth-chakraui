import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserDataTable } from "../components/UserDataTable";
import { App } from "../views/App";
import { Dashboard } from "../views/Dashboard";
import { Errorpage } from "../views/Errorpage";
import { ForgotPassword } from "../views/ForgotPassword";
import { Signin } from "../views/Signin";
import { Signup } from "../views/Signup";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Signin />} />
        <Route path="register" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="" element={<Errorpage />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard/>}>
        <Route index element={<UserDataTable/>}/>
      </Route>
    </Routes>
  );
};
